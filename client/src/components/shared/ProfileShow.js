import axios from "axios";
import { useEffect, useState } from "react";

const ProfileShow = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getUserProfiles();
  }, []);

  const getUserProfiles = async () => {
    try {
      let res = await axios.get(`/api/user_campaign_updates`);
      setProfiles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ height: "73vh" }}>
        <u>Test</u>
        <p>{JSON.stringify(profiles)}</p>
      </div>
    </>
  );
};

export default ProfileShow;
