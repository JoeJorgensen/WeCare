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

  const renderData = () => {
    return expiration.map((c) => {
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

export default Expirations;
