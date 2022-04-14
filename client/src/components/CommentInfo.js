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
      let res = await axios.get("/api/donations");
      setComments(res.data);
    } catch (error) {
      alert("error occurred getting comments data");
    }
  };

  const renderData = () => {
    return comments.map((c) => {
      return (
        <div
          key={c.id}
          style={{
            border: "1px solid",
            margin: "10px",
          }}
        >
          <p>Comment: {c.comment}</p>
          <p>User: {c.user}</p>
          <p>Campaign: {c.campaign}</p>

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
      {JSON.stringify(comments)}
      {renderData()}
    </div>
  );
};

export default Comments;
