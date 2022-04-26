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
