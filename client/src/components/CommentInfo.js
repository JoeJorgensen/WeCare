import axios from "axios";
import useAxios from "axios-hooks";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AxiosContainer from "../providers/AxiosContainer";
import Card1 from "../providers/Card";
import StringifyJSON from "../providers/StringifyJSON";
import CampaignCard from "./Styling/CampaignCard";
import DonationCardShow from "./Styling/DonationCardShow";
import { Pagination } from "react-bootstrap";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      let res = await axios.get("/api/user_with_campaigns");
      setComments(res.data);
    } catch (error) {
      alert("error occurred getting comments data");
    }
  };

  function styledCards() {
    return (
      <>
        {comments.map((c) => (
          <DonationCardShow
            onClick={() => navigate(`/campaign_show/${c.campaign_id}`)}
            onClickImg={() => navigate(`/profile_show/${c.user_id}`)}
            key={c.id}
            title={c.username}
            current_amount={c.amount}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            description={c.comment}
            image={c.image}
          />
        ))}
      </>
    );
  }

  const renderData = () => {
    return comments.map((c) => {
      if (c.anonymous)
        <Card
          className="commentCards"
          key={c.id}
          border="info"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <div
              style={{
                display: "flex-inline",
                textAlign: "left",
                justifyContent: "space-evenly",
              }}
            ></div>
            <h4>
              <Badge pill>${c.amount}</Badge>
            </h4>
            <hr></hr>
            <Card.Text>{c.comment}</Card.Text>
            <Card.Text>{c.campaign_name}</Card.Text>
          </Card.Body>
        </Card>;
      return (
        <Card
          className="commentCards"
          key={c.id}
          border="info"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <div
              style={{
                display: "flex-inline",
                textAlign: "left",
                justifyContent: "space-evenly",
              }}
            >
              <Card.Img
                src={c.image}
                width={300}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  margin: "7px",
                }}
              />
              <Badge pill bg="dark">
                <Card.Title style={{ marginBottom: "0px" }}>
                  {c.username}
                </Card.Title>
              </Badge>
            </div>
            <h4>
              <Badge pill>${c.amount}</Badge>
            </h4>
            <hr></hr>
            <Card.Text>{c.comment}</Card.Text>
            <Card.Text>{c.campaign_name}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <div
      className="carousel"
      style={
        {
          // display: "inline-flex",
          // flexWrap: "wrap",
          // justifyContent: "space-evenly",
          // gap: "30px ",
        }
      }
    >
      {/* {renderData()} */}

      {styledCards()}
    </div>
  );
};

export default Comments;
