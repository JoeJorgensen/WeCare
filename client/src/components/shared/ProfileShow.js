import axios from "axios";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../providers/Card";
import CampaignCard from "../Styling/CampaignCard";
import DonationCardShow from "../Styling/DonationCardShow";
import ProfileCard from "../Styling/Theme/ProfileCard";

const ProfileShow = () => {
  const [donations, setDonations] = useState([]);
  const [users, setUsers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const params = useParams();
  const navigate = useNavigate()
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

  const userProfile =()=>{
    return(
      <div>
      {users.map((c) => (
        
          <ProfileCard
            onClick={() => navigate(`/campaign_show/${c.campaign_id}`)}
            key={c.id}
            hexa={"#1DB95F"}
            title={c.name}


            description={c.bio}
            image={c.image}
          />

      ))}
      
       </div>
    )
  }


  const usersDonations = ()=>{
    return(
      <div>
      {donations.map((c) => (
        
          <DonationCardShow
            onClick={() => navigate(`/campaign_show/${c.campaign_id}`)}
            key={c.donation_id}
            hexa={"#1DB95F"}
            title={c.name}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.campaign_image}
          />

      ))}
      
       </div>
    )
  }

  
  function usersCampaigns() {
    return (

      <>
          {campaigns.map((c) => (
            <CampaignCard
              onClick={ () => navigate(`/campaign_show/${c.id}`)}
              key={c.id}
              title={c.name}
              description={c.description}
              current_amount={c.current_amount}
              goal={c.goal}
              image={c.image }
              
            />
          ))}


      </>

    );
  }

  return (
    <>
      <Card >

        {userProfile()}
        <br/>
        {usersDonations()}
        <br/>

        {usersCampaigns()}

      </Card>
    </>
  );
};

export default ProfileShow;
