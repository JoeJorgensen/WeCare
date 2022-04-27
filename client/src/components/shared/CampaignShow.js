import axios from "axios";
import Card from "react-bootstrap/esm/Card";
import Card1 from "../../providers/Card";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import Donate from "../auth/Donate";
import WalletBalance from "../WalletBalanceInfo";
import DonationCard from "../Styling/DonationCard";
import { DateTime } from "luxon";
import LargeCampaignCard from "../Styling/LargeCampaignCard";
import DonationCardShow from "../Styling/DonationCardShow";
import CampaignCard from "../Styling/CampaignCard";
import UpdateCard from "../Styling/UpdateCard";
import MyPagination from "../Pagination";
// import '../Styling/Aside.css'

const CampaignShow = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [donations, setDonations] = useState([]);
  const [copied, setCopied] = useState(false);
  const [tagList, setTagList] = useState([])
  const [currPage, setCurrPage] = useState(3);
  useEffect(() => {
    getCampaign();
    getUpdates();
    getDonations();
    afterPageClicked(3)
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

  const getDonations = async (page_number) => {
    setCurrPage(page_number)
    try {
      let res = await axios.get(`/api/donation_by_user/${params.id}`);
      setDonations(res.data);
      // setTagList(res.data.id)
    } catch (error) {
      alert("error getting donations");
    }
  };


  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
    fetch(`https://dummyapi.io/data/api/tag?limit=10&page=${page_number}`, {
      headers: {
        "app-id": "60983c4f56c487f12fd13e23"
      }
    })
      .then((response) => response.json())
      .then((data) => setTagList(data.data));
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
            title={c.name}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.image}
          />
         
        ))}
      </>
    );
  }

  const renderDonations = () => {
    return donations.map((d) => {
      return (
        <Card key={d.id} border="info" style={{ width: "18rem" }}>
          <Card.Body>
            <div
              style={{
                display: "flex-inline",
                textAlign: "left",
                justifyContent: "space-evenly",
              }}
            >
              <Card.Img
                src={d.image}
                width={300}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  margin: "7px",
                }}
              />

              <Badge pill bg="dark">
                <Card.Title style={{ marginBottom: "0px" }}>
                  {d.name}
                </Card.Title>
              </Badge>
              <br />
            </div>
            <h4>
              <Badge pill>${d.amount}</Badge>
            </h4>
            <hr></hr>
            <Card.Text>{d.comment}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      );
    });
  };

  const getUpdates = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}/updates`);
      setUpdates(res.data);
    } catch (error) {
      alert("error when getting updates");
    }
  };

  function styledUpdates() {
    return (
      <>
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
      </>
    );
  }

  const renderUpdates = () => {
    return updates.map((u) => {
      return (
        <Card key={u.id} border="info" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={u.image} />
            <br />
            <br />

            <Card.Title>{u.comment}</Card.Title>
            <p>{u.created_at}</p>
          </Card.Body>
        </Card>
      );
    });
  };
  const getCampaign = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}`);
      setCampaign(res.data);
    } catch (error) {
      alert("error occurred getting campaign");
      console.log(error);
    }
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

  const renderCampaign = () => {
    return (
      <Card key={campaign.id} border="info" style={{ width: "50rem" }}>
        <Card.Body>
          <Badge pill bg="dark">
            <Card.Title style={{ marginBottom: "0px" }}>
              {campaign.name}
            </Card.Title>
          </Badge>
          <br />
          <br />

          <Card.Img variant="top" src={campaign.image} />
          <p>Current: ${campaign.current_amount}</p>
          <p>Goal: ${campaign.goal}</p>
          <Card.Text>{campaign.description}</Card.Text>
          <Card.Text>Created: {campaign.created_at}</Card.Text>
          <Card.Text>Ends: {campaign.expiration}</Card.Text>
          {/* <Card.Text>
            Category: {campaign.category}
             </Card.Text> */}
          {/* <Button variant="primary" onClick={()=> navigate('/donate') }>Donate</Button> */}
          <Donate />
          <br />
          <Button variant="outline-success" onClick={copyURL}>
            {!copied ? "Share Campaign" : "Link Copied!"}
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <div
        style={{
          // aside :{
          //   width: '30%',
          //   paddingLeft: '15px',
          //   marginLeft: '15px',
          //   float: 'right',

          // },
          margin: "20px",
          display: "flex",
          // flexWrap: "wrap",
          // flexDirection: 'column',
          justifyContent: "space-evenly",
          // alignContent: 'stretch',

          // alignItems:'flex-end',
          // gap: "60px ",
        }}
      >
        <div
        className='main'
          style={{
            textAlign: "left",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        >
          {styledCampaign()}
          <br />
          <br />
          {/* <h2
            style={{
              textAlign: "center",
            }}
          >
            <Badge pill bg="dark">
              Updates
            </Badge>
          </h2> */}
          {styledUpdates()}
        </div>

        <aside className='sidebar'
          style={{
            
            display:'flex',
            paddingLeft: "15px",
            marginLeft: "15px",
            marginRight: "15px",

            // float: "right",
            textAlign: "center",

            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",

            // flexBasis: 'auto',
          }}
        >
          <h4 >
            <Badge bg='denim' pill >Wallet Balance</Badge>
            <WalletBalance />
          </h4>

          <Donate />
          <br />
          <Button variant="outline-warning" onClick={copyURL}>
            {!copied ? "Share Campaign" : "Link Copied!"}
          </Button>
          <br />
          <br />

          {styledDonation()}


          <MyPagination
           totPages={3}
          currPage={currPage}
          pageClicked={(ele)=>{
            getDonations(ele)
          }}
          >
             <ul>
        {tagList.map((ele, ind) => {
          return <li key={ele + ind}>{ele}</li>;
        })}
      </ul>
          </MyPagination>
        </aside>
        {/* {renderCampaign()} */}
      </div>

      <br />
      <br />
    </>
  );
};
export default CampaignShow;
