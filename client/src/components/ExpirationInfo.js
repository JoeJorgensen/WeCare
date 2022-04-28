import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";
import Card1 from "../providers/Card";
import CampaignCard from "./Styling/CampaignCard";

const Expirations = () => {
  const [expiration, setExpiration] = useState([]);
  const navigate = useNavigate();
  // const [{ data: campaigns, loading, error }, refetch] =
  //   useAxios("/api/campaigns");

  useEffect(() => {
    getExpirations();
  }, []);

  const getExpirations = async () => {
    try {
      let res = await axios.get("/api/expiration_over_50");
      setExpiration(res.data);
      console.log(res.data);
    } catch (error) {
      alert("error occurred getting campaign data");
    }
  };

  function styledCards() {
    return (

      <>
          {expiration.map((e) => (
            <CampaignCard
              onClick={ () => navigate(`/campaign_show/${e.id}`)}
              key={e.id}
              hexa={'#1DB95F'}
              title={e.name}
              description={e.description}
              current_amount={e.current_amount}
              goal={e.goal}
              image={e.image }
              
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

export default Expirations;
