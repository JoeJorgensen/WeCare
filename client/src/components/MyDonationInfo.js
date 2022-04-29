import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";
import { Card, Button, Badge } from "react-bootstrap";
import UserDonationCard from "./Styling/UserDonationCard";

import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

const MyDonationInfo = () => {
  const [myDonations, setMyDonations] = useState([]);
  const navigate = useNavigate();

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
  function styledDonation() {
    return (
      <>
        {myDonations.map((c) => (
          <UserDonationCard
            onClick={() => navigate(`/campaign_show/${c.campaign_id}`)}
            key={c.id}
            hexa={"#1DB95F"}
            title={c.name}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.image}
          />
        ))}
      </>
    );
  }

  const renderData = () => {
    return myDonations.map((c) => {
      return (
        <Card
          className="donationCards"
          key={c.id}
          border="info"
          style={{ width: "25rem" }}
        >
          <div>
            <Card.Body>
              <Card.Img
                src={c.image}
                // width={300}
                // style={{
                //   objectFit: "cover",
                //   borderRadius: "50%",
                //   width: "50px",
                //   height: "50px",
                //   margin: "7px",
                // }}
              />
              <Card.Title>
                <hr></hr>
                <Badge bg="dark">
                  <h6>Campaign: {c.name}</h6>
                </Badge>
                <h6>{c.description}</h6>

                <Badge>
                  <h6>
                    Current Goal: <u>${c.current_amount}</u>
                  </h6>
                </Badge>
                <br></br>
                <br></br>
                <Badge>
                  <h6>
                    Total Goal: <u>${c.goal}</u>
                  </h6>
                </Badge>
                <br></br>
                <br></br>
                <Badge bg="success">
                  <h6>
                    Donation Amount: <u>${c.amount}</u>
                  </h6>
                </Badge>
                <hr></hr>
                <h6>Comment: {c.comment}</h6>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>
      );
    });
  };

  return (
    <div
      style={{
        //  alignItems: "center"
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "30px ",
      }}
    >
      {/* {JSON.stringify(myDonations)} */}
      {styledDonation()}
      {/* {renderData()} */}
    </div>
  );
};

export default MyDonationInfo;
