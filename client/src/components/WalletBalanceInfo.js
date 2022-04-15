import useAxios from "axios-hooks";
import { useContext } from "react";
import AxiosContainer from "../providers/AxiosContainer";
import StringifyJSON from "../providers/StringifyJSON";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Card from "../providers/Card";

const WalletBalance = () => {
  // need to grab User from AuthProvider
  const auth = useContext(AuthContext);
  const renderWallet = () =>{

    if (auth.user) {
      return (
        <div>
          <p> 
        ${auth.user.balance} 
        </p>
        </div> 
      )
    }
    return (
      <Card>
        <div>
          <h1>Welcome to WeCare! Login or Register to access your wallet and more features!</h1>
  
          <Link to="/login">
            <Badge style={{ color: "white" }}>
              <h4>Login</h4>
            </Badge>
          </Link>
          <br />
          <br />
  
          <Link to="/register">
            <Badge style={{ color: "white" }}>
              <h4>Register</h4>
            </Badge>
          </Link>
        </div>
      </Card>
    );
  };

  return (
    <div>
      {renderWallet()}
    </div>
  )
  
  ;
};

export default WalletBalance;
