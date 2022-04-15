import { useContext } from "react";
import Badge from "react-bootstrap/esm/Badge";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Card from "../../providers/Card";

const Home = () => {
  // let auth = useContext(AuthContext)
  // if(!auth.user){
  //     return <p>
  //         Welcome to the starter app!
  //     </p>
  // }
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const renderHome = () => {
    if (auth.user) {
      return navigate("/feed")
  
    }
    return (
      <Card>
        <div>
          <h1>Welcome to WeCare! Login or Register to access more features!</h1>

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

  return <div>
    {renderHome()}
    </div>;
};

export default Home;
