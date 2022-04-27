import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignCard from "../Styling/CampaignCard";
import UpdateCard from "../Styling/UpdateCard";
import { DateTime } from "luxon";
import Card from "../../providers/Card";
import Logo from "../shared/Images/WecareLogo.png";
import Update from "../shared/Update.js";


const MyCampaigns = () => {
  const navigate = useNavigate();
  const [campaignInfo, setCampaignInfo] = useState([]);
  const [updates, setUpdates] = useState([]);

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

  const addUpdate = (update) => {
    setUpdates([...updates, update])
  }

  const renderCampaignInfo = () => {
    return campaignInfo.map((c) => {
      return (
        <>
          <CampaignCard
            onClick={() => navigate(`/campaign_show/${c.id}`)}
            key={c.id}
            title={c.name}
            description={c.description}
            current_amount={c.current_amount}
            goal={c.goal}
            image={c.image}
          />
          <Update id={c.id} addUpdate={addUpdate}/>
        </>
      );
    });
  };

  const renderUpdates = () => {
    return updates.map((u) => {
      console.log(u.id);
      return (
        <UpdateCard
          onClick={() => navigate(`/campaign_show/${u.campaign_id}`)}
          key={u.id}
          title={u.title}
          image={u.image}
          description={u.comment}
          date={DateTime.fromISO(u.created_at).toFormat("DD")}
        />
      );
    });
  };

  return (
    <Card>
    <div>
      <img style={{ height: "145px" }} src={Logo}></img>
      <h1>My Campaigns</h1>
      <hr />
      {renderCampaignInfo()}
      <h1>My Updates</h1>
      <hr />
      {renderUpdates()}
    </div>
    </Card>
  );
};

export default MyCampaigns;
