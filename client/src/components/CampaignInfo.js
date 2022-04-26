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


  const renderData = () => {
    return campaigns.map((c) => {
      return (

        


        // <Card1 key={c.id} style={{ margin: "15px", alignContent: "center" }}>
        <Card
          className="campaignCards"
          key={c.id}
          border="info"
          style={{
            // borderRadius: "10%",
            width: "22rem",
          }}
          onClick={() => navigate(`/campaign_show/${c.id}`)}
        >
          <Card.Img
            src={c.image}
            //  style={{
            //   objectFit: 'cover',
            //   borderRadius: "10%",
            //   width: "22rem",
            //   height: "200px",
            // }}
          />
          <Card.Body>
            <Card.Title>
              <Badge pill bg="dark">
                {c.name}
              </Badge>
            </Card.Title>
            <Card.Text>
              <h6> {c.description}</h6>
            </Card.Text>
            <Card.Text>
              <h6>
                <Badge pill bg="info">
                  Current Amount: ${c.current_amount}
                </Badge>
              </h6>
            </Card.Text>

            <Card.Text>
              <h6>
                <Badge pill bg="info">
                  Goal: ${c.goal}
                </Badge>
              </h6>
            </Card.Text>

            <Card.Text>
              <h6>Expiration: {c.expiration}</h6>
            </Card.Text>
          </Card.Body>
        </Card>
        // </Card1>
      );
    });
  };

  return (
    // <AxiosContainer title={"Campaigns"} loading={loading} error={error}>
    //   <StringifyJSON data={campaigns} />
    // </AxiosContainer>
    <div
      style={{
        //  alignItems: "center"
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "30px ",
      }}
    >

      {/* {JSON.stringify(campaigns)} */}
      {/* {renderData()} */}
      {styledCards()}
      
    </div>
  );
};

export default Campaigns;

// const Campaigns = () => {
//   // need to grab User from AuthProvider
//   const auth = useContext(AuthContext);

//   return <p> ${auth.user.campaigns} </p>;
// };
