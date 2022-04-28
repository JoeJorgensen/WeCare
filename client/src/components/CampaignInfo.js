import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import CampaignCard from './Styling/CampaignCard';




const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {
      let res = await axios.get("/api/order_by_expd");
      setCampaigns(res.data);
    } catch (error) {
      alert("error occurred getting campaign data");
    }

  };

  function styledCards() {
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
   
    <div
      style={{
        //  alignItems: "center"
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        // gap: "30px ",
      }}
    >
    
      {styledCards()}
      
    </div>
  );
};

export default Campaigns;


