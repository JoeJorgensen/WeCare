import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileShow = () => {
  const [profiles, setProfiles] = useState([]);

  const params = useParams();

  useEffect(() => {
    getUserProfiles();
  }, []);

  const getUserProfiles = async () => {
    try {
      let res = await axios.get(`/api/users_campaigns_donated_to/${params.id}`);
      console.log(res.data);
      setProfiles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //User campaigns that they donated to rendering
  const userProfileData = () => {
    return profiles.map((p) => {
      return (
        <div key={p.id}>
          {p.name}
          {p.user_name}
          {p.amount}
          {p.campaign_id}
          {p.user_id}
          {p.image}
          {p.campaign_image}
          {p.comment}
          {p.created_at}
        </div>
      );
    });
  };

  return (
    <>
      <div style={{ height: "73vh" }}>
        <h1>Profile Show</h1>
        <p>{JSON.stringify(profiles)}</p>
        <p>{userProfileData()}</p>
      </div>
    </>
  );
};

export default ProfileShow;
