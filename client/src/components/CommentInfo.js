import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import AxiosContainer from "../providers/AxiosContainer";
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
      console.log(c);
      return (
        <div
          key={c.id}
          style={{
            border: "1px solid",
            margin: "10px",
          }}
        >
          <h6>Donation Amount: ${c.amount}</h6>
          <h6>Comment: {c.comment}</h6>
          <h6>User: {c.username}</h6>
          <h6>Campaign: {c.campaign_name}</h6>

          {/* <p>Image: {c.image}</p> */}
          {/* <p>Campaign ID: ${c.id}</p> */}
        </div>
      );
    });
  };

  return (
    // <AxiosContainer title={"Campaigns"} loading={loading} error={error}>
    //   <StringifyJSON data={campaigns} />
    // </AxiosContainer>
    <div>
      {/* {JSON.stringify(comments)} */}
      {renderData()}
    </div>
  );
};

export default Comments;
