import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const FetchUser = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  // [] makes this act as componentDidMount
  useEffect(() => {
    checkUser();
  }, []);
  const checkUser = async () => {
    // if user is authenticated or doesn't have access token
    // we can setLoaded to true and return from the function call
    //This is checking if there is 100% a token or 100% not a token in order to render or not render our protected routes. 
    if (user || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }
    // user is not authentecated but has access-token in local storage
    // let's check if it is valid if it, will grab and set user
    try {
      const res = await axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
      console.log("unable to validate token");
    } finally {
      //Block of code to be executed regardless of the try / catch result
      setLoaded(true);
    }
  };

  // return nested jsx in app.js. if loaded ie user has been checked to see
  // if they are auth or not, while in the process of checking don't
  // return nested instead just return null, this way nothing in the fetchuser
  // in app.js wont be loaded
  return loaded ? props.children : null;
};

export default FetchUser;