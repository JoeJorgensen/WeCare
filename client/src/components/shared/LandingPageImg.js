
import { useContext } from "react";



import people from "../shared/Images/We-CareImg.jpg";

import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const LandingPageImg = () => {
  // need to grab User from AuthProvider
  const auth = useContext(AuthContext);
  const nav = useNavigate()
  const renderImg = () =>{

    if (auth.user) {
      return (
        <>
        </> 
      )
    }
    return (
        <div className="landingPage">
        <img src={people} className="landingImage" alt="logo"></img>

        <Badge pill bg="success" className="landingPageText">
          <h2 onClick={() => nav("/login")}>Login</h2>
        </Badge>
        <Badge pill bg="success" className="landingPageText2">
          <h2 onClick={() => nav("/register")}>Register</h2>
        </Badge>
      </div>
    );
  };

  return (
    <div>
      {renderImg()}
    </div>
  )
  
  ;
};

export default LandingPageImg;
