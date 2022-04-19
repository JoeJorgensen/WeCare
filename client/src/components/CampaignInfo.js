import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";
import Card1 from "../providers/Card";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  // const [{ data: campaigns, loading, error }, refetch] =
  //   useAxios("/api/campaigns");



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

  const renderData = () => {
    return campaigns.map((c) => {
      return (
        // <Card1 key={c.id} style={{ margin: "15px", alignContent: "center" }}>
        <Card 
        key ={c.id}
          border="info"
          style={{
            width: "22rem"
          }}
        >
          <Card.Img src={c.image} />
          <Card.Body>
            <Card.Title> {c.name}</Card.Title>
            <Card.Text>
              <h6> {c.description}</h6>
              <h6>
                Current Amount: <u>${c.current_amount}</u>
              </h6>
              <h6>
                Goal: <u>${c.goal}</u>
              </h6>
              <h6>Expiration: {c.expiration}</h6>
              <Link to={`/campaign_show/${c.id}`}>
                <Button>show</Button>
              </Link>
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
    <div style={{
      //  alignItems: "center"
        display: "inline-flex",
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly',
        gap: '30px ', 
       }}>


      {/* {JSON.stringify(campaigns)} */}
      {renderData()}
      
    </div>
  );
};

export default Campaigns;

// const Campaigns = () => {
//   // need to grab User from AuthProvider
//   const auth = useContext(AuthContext);

//   return <p> ${auth.user.campaigns} </p>;
// };
