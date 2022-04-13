import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
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
      let res = await axios.get("/api/campaigns");
      setCampaigns(res.data);
    } catch (error) {
      alert("error occurred getting campaign data");
    }
  };

  const renderData = () => {
    return campaigns.map((c) => {
      return (
        <div
          key={c.id}
          style={{
            border: "1px solid",
            margin: "10px",
          }}
        >
          <p>Name: {c.name}</p>
          <p>Description: {c.description}</p>
          <p>Current Amount: ${c.current_amount}</p>
          <p>Goal: ${c.goal}</p>
          <p>Expiration: {c.expiration}</p>
        </div>
      );
    });
  };

  return (
    // <AxiosContainer title={"Campaigns"} loading={loading} error={error}>
    //   <StringifyJSON data={campaigns} />
    // </AxiosContainer>
    <div>
      {JSON.stringify(campaigns)}
      {renderData()}
    </div>
  );
};

export default Campaigns;
