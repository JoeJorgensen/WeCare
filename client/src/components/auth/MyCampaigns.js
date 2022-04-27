import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Update from "../shared/Update";

const MyCampaigns = () => {
  const navigate = useNavigate();
  const [campaignInfo, setCampaignInfo] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getUserCampaigns();
    getCampaignUpdates();
  }, []);

  const getUserCampaigns = async () => {
    try {
      let res = await axios.get("/api/campaigns_by_user");
      console.log("campaigns", res.data);
      setCampaignInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCampaignUpdates = async () => {
    try {
      let res = await axios.get("/api/updates_by_campaign");
      console.log("updates", res.data);
      setUpdates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCampaignInfo = () => {
    return campaignInfo.map((ci) => {
      console.log(ci.id);
      return (
        <Card
          onClick={() => navigate(`/campaign_show/${ci.id}`)}
          className="donationCards"
          key={ci.id}
          border="info"
          style={{ width: "25rem" }}
        >
          <Card.Body>
            <Card.Img src={ci.image} />
            <Card.Title>
              <hr></hr>
              <Badge bg="denim">
                <h6>Campaign: {ci.name}</h6>
              </Badge>
              <h6>{ci.description}</h6>

              <Badge bg="denim">
                <h6>
                  Current Goal: <u>${ci.current_amount}</u>
                </h6>
              </Badge>
              <br></br>
              <br></br>
              <Badge bg="denim">
                <h6>
                  Total Goal: <u>${ci.goal}</u>
                </h6>
              </Badge>
              <br />
              <br />
            </Card.Title>
            <Update id={ci.id} />
          </Card.Body>
        </Card>
      );
    });
  };

  const renderUpdates = () => {
    console.log(updates);
    return updates.map((u) => {
      console.log(u.id);
      return (
        <Card
          onClick={() => navigate(`/campaign_show/${u.id}`)}
          className="donationCards"
          key={u.id}
          border="info"
          style={{ width: "40rem" }}
        >
          <div>
            <Card.Body>
              <Card.Img src={u.image} />
              <Card.Title>
                <hr></hr>
                Campaign: {u.campaign_name}
                <Badge bg="denim">Update: {u.comment}</Badge>
                <Badge bg="denim">Created At: {u.created_at}</Badge>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>
      );
    });
  };

  return (
    <>
      {/* {<p>{JSON.stringify(updates)}</p>} */}
      {/* <p>{JSON.stringify(campaignInfo)}</p> */}
      <h1>My Campaigns</h1>
      {renderCampaignInfo()}

      <h1>My Updates</h1>
      {renderUpdates()}
    </>
  );
};

export default MyCampaigns;
