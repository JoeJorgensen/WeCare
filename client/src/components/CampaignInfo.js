import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  // const [{ data: campaigns, loading, error }, refetch] =
  //   useAxios("/api/campaigns");
  console.log("Campaign Info Being Called:");
  console.log("campaigns", campaigns);

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
        <Card style={{ margin: "15px" }}>
          <div key={c.id}>
            <img src={c.image} />
            <h6>Name: {c.name}</h6>
            <h6>Description: {c.description}</h6>
            <h6>Current Amount: ${c.current_amount}</h6>
            <h6>Goal: ${c.goal}</h6>
            <h6>Expiration: {c.expiration}</h6>
            <Link to={`/campaign_show/${c.id}`}>show</Link>
          </div>
        </Card>
      );
    });
  };

  return (
    // <AxiosContainer title={"Campaigns"} loading={loading} error={error}>
    //   <StringifyJSON data={campaigns} />
    // </AxiosContainer>
    <div>
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
