import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import AxiosContainer from "../providers/AxiosContainer";
import Card1 from "../providers/Card";
import StringifyJSON from "../providers/StringifyJSON";

const Comments = () => {
  const [comments, setComments] = useState([]);
  console.log("Comment Info Being Called:");
  console.log("comments", comments);

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

  const renderData = () => {
    return comments.map((c) => {
      // console.log(c);
      return (
        // <div
        //   key={c.id}
        //   style={{
        //     border: "1px solid",
        //     margin: "10px",
        //   }}
        // >
        //   <h6>Donation Amount: ${c.amount}</h6>
        //   <h6>Comment: {c.comment}</h6>
        //   <h6>User: {c.username}</h6>
        //   <h6>Campaign: {c.campaign_name}</h6>

        // </div>

        <Card key={c.id} border="info" style={{ width: "18rem" }}>
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
              <Badge bg="dark">
                <Card.Title style={{ marginBottom: "0px" }}>
                  {c.username}
                </Card.Title>
              </Badge>
            </div>
            <h4>
              <Badge>${c.amount}</Badge>
            </h4>
            <hr></hr>
            <Card.Text>{c.comment}</Card.Text>
            <Card.Text>{c.campaign_name}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
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
      {/* {JSON.stringify(comments)} */}
      {renderData()}
    </div>
  );
};

export default Comments;
