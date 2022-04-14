import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";

const MyDonation = () => {
  const [myDonations, setMyDonations] = useState([]);
  console.log("MyDonations Being Called:");
  console.log("donations", myDonations);

  useEffect(() => {
    getDonations();
  }, []);

  const getDonations = async () => {
    try {
      let res = await axios.get("/api/user_donations");
      setMyDonations(res.data);
    } catch (error) {
      alert("error occurred getting donations data");
    }
  };

  const renderData = () => {
    return myDonations.map((c) => {
      return (
        <div
          key={c.id}
          style={{
            border: "1px solid",
            margin: "10px",
          }}
        >
          <h6>Comment: {c.comment}</h6>
          <h6>Campaign: {c.name}</h6>
        </div>
      );
    });
  };

  return (
    <div>
      {JSON.stringify(myDonations)}
      {renderData()}
    </div>
  );
};

export default MyDonation;
