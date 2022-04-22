
   
import Card from "../../providers/Card";
import useAxios from "axios-hooks";
import AxiosContainer from "../../providers/AxiosContainer";
import StringifyJSON from "../../providers/StringifyJSON";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";
import CommentInfo from "../CommentInfo";
import { Badge } from "react-bootstrap";
import people from "../shared/Images/We-CareImg.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="landingPage">
        <img src={people} className="landingImage" alt="logo"></img>

        <Badge pill bg="success" className="landingPageText">
          <h2 onClick={() => nav("/login")}>Login</h2>
        </Badge>
        <Badge pill bg="success" className="landingPageText2">
          <h2 onClick={() => nav("/register")}>Register</h2>
        </Badge>
      </div>
      <Card>
        <div>
          

          <br />

          <br />

          <h2>
            <Badge bg="dark">Urgent Fundraising</Badge>
          </h2>
          <br />

          <CampaignInfo />
          <br />
          <br />

          <hr></hr>
          <h2>
            <Badge bg="dark">Coming to an end</Badge>
          </h2>
          <br />

          <CampaignInfo />

          <hr></hr>
          <h2>
          <Badge bg="dark">Prayers from good people</Badge>
          </h2>
          <br/>
          <CommentInfo />
        </div>
      </Card>
    </div>
  );
};

export default LandingPage;