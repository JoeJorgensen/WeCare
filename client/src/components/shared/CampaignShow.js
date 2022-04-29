import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import Donate from "../auth/Donate";
import WalletBalance from "../WalletBalanceInfo";
import { DateTime } from "luxon";
import LargeCampaignCard from "../Styling/LargeCampaignCard";
import DonationCardShow from "../Styling/DonationCardShow";
import UpdateCard from "../Styling/UpdateCard";
// import '../Styling/Aside.css'
import ProfilePic from "../shared/Images/DefaultProfile.png";
import DonationPagination from "../DonationPagination";
import Pagination from "../Pagination";

const CampaignShow = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [donations, setDonations] = useState([]);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [donationsPerPage] = useState(3);
  const [categories, setCategories] = useState("");

  useEffect(() => {
    getCampaign();
    getUpdates();
    getDonations();
    // window.scrollTo(0, 0);
    getCategories()
  }, []);

  const copyURL = () => {
    const e = document.createElement("input");
    e.value = window.location.href;
    document.body.appendChild(e);
    e.select();
    document.execCommand("copy");
    document.body.removeChild(e);
    setCopied(true);
  };

  

  const getDonations = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`/api/donation_by_user/${params.id}`);
      setDonations(res.data);
      setLoading(false);
    } catch (error) {
      alert("error getting donations");
    }
  };

  function styledDonation() {
    return (
      <>
        {donations.map((c) => (
          <DonationCardShow
            onClickImg={() => navigate(`/profile_show/${c.user_id}`)}
            onClick={() => navigate(`/campaign_show/${c.campaign_id}`)}
            key={c.id}
            hexa={"#1DB95F"}
            title={c.anonymous ? "Anonymous" : `${c.name}`}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.anonymous ? ProfilePic : c.image}
          />
        ))}
      </>
    );
  }

  const indexOfLastDonation = currentPage * donationsPerPage;
  const indexOfFirstDonation = indexOfLastDonation - donationsPerPage;
  const currentDonations = donations.slice(
    indexOfFirstDonation,
    indexOfLastDonation
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getUpdates = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}/updates`);
      setUpdates(res.data);
    } catch (error) {
      alert("error when getting updates");
    }
  };

  const addDonation = (donation) => {
    setDonations([...donations, donation])
  }

  function styledUpdates() {
    return (
      <div style={{display:'flex', flexDirection:'column-reverse'}}>
        {updates.map((c) => (
          <UpdateCard
            key={c.id}
            hexa={"#1DB95F"}
            title={c.name}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.image}
          />
        ))}
      </ div>
    );
  }

  const getCampaign = async () => {
    try {
      let res = await axios.get(`/api/campaign_plus_categories/${params.id}`);
      setCampaign(res.data[0]);
      console.log(res)
    } catch (error) {
      alert("error occurred getting campaign");
      console.log(error);
    }
  };

  const showCategory = () => {
    return categories.map((c) => {
      return (c.id = campaign.id);
    });
  };

  function styledCampaign() {
    return (
      <>
        <LargeCampaignCard
          key={campaign.id}
          title={campaign.name}
          description={campaign.description}
          current_amount={campaign.current_amount}
          goal={campaign.goal}
          image={campaign.image}
        />
      </>
    );
  }

  return (
    <>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap:'wrap',
          justifyContent: "space-evenly",
        }}
      >
        <div
          // className="main"
          style={{
            textAlign: "left",
            marginLeft: "15px",
            marginRight: "15px",
            margin: "auto",
            padding: "auto",
          }}
        >
          {styledCampaign()}
          <br />
          <br />

          {styledUpdates()}
        </div>

        <aside
          className="sidebar"
          style={{
            display: "flex",
            paddingLeft: "15px",
            paddingBottom: "15px",

            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "15px",

            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <h4>
            <Badge bg="denim" pill>
              Wallet Balance
            </Badge>
            <WalletBalance />
          </h4>

          <Donate  addDonation={addDonation}/>
          <br />
          <Button variant="outline-warning" onClick={copyURL}>
            {!copied ? "Share Campaign" : "Link Copied!"}
          </Button>
          <br />

          <DonationPagination donations={currentDonations} loading={loading} />
          <Pagination
            className="side"
            donationsPerPage={donationsPerPage}
            totalDonations={donations.length}
            paginate={paginate}
          />
        </aside>
      </div>
    </>
  );
};
export default CampaignShow;
