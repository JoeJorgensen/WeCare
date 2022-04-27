import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileShow = () => {
  const [donations, setDonations] = useState([]);
  const [users, setUsers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const params = useParams();

  useEffect(() => {
    getUserProfiles();
  }, []);

  const getUserProfiles = async () => {
    try {
      let res = await axios.get(`/api/users_campaigns_donated_to/${params.id}`);
      console.log(res.data);
      //Profile clicked campaigns that they donated to
      setDonations(res.data.donations);
      //Profile clicked info (bio, img, ect)
      setUsers(res.data.user);
      //Profile clicked campaigns they created
      setCampaigns(res.data.campaigns);
    } catch (error) {
      console.log(error);
    }
  };

  //User campaigns that they donated to rendering
  const userProfileData = () => {
    return donations.map((d) => {
      return (
        <div key={d.id}>
          {d.name}
          {d.user_name}
          {d.amount}
          {d.campaign_id}
          {d.user_id}
          {d.image}
          {d.campaign_image}
          {d.comment}
          {d.created_at}
        </div>
      );
    });
  };

  const userInfoData = () => {
    return users.map((u) => {
      return (
        <div key={u.id}>
          {u.bio} {u.image} {u.name} {u.id}
        </div>
      );
    });
  };

  const userCampaignData = () => {
    return campaigns.map((c) => {
      return (
        <div key={c.id}>
          {c.name} {c.description} {c.image} {c.current_amount} {c.id}
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <h1>Profile Show</h1>
        <p>{JSON.stringify(donations)}</p>
        <p>{JSON.stringify(users)}</p>
        <p>{JSON.stringify(campaigns)}</p>
        <p>Campaigns they donated to data:{userProfileData()}</p>
        <p>Info about Users profile data:{userInfoData()}</p>
        <p>Campaigns the profile clicked has created:{userCampaignData()}</p>
      </div>
    </>
  );
};

export default ProfileShow;
