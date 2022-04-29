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
  const renderWallet = () => {
    if (auth.user) {
      return <>${auth.user.balance}</>;
    }
    return (
      <Card>
        <div>
          <h6>
            Welcome to WeCare! Login or Register to access your wallet!
          </h6>

          <Link to="/login">
            <h4>
              {" "}
              <Badge pill bg="denim" style={{ color: "white" }}>
                Login
              </Badge>
            </h4>
          </Link>
         

          <Link to="/register">
            <h4>
              <Badge pill bg="denim" style={{ color: "white" }}>
                Register
              </Badge>
            </h4>
          </Link>
        </div>
      </Card>
    );
  };

  return <div>{renderWallet()}</div>;
};

export default WalletBalance;
