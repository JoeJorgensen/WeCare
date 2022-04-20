import Card from "../../providers/Card";
import useAxios from "axios-hooks";
import AxiosContainer from "../../providers/AxiosContainer";
import StringifyJSON from "../../providers/StringifyJSON";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";
import CommentInfo from "../CommentInfo";
import { Badge } from "react-bootstrap";
import people from "../shared/Images/We-CareImg.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="landingPage">
        <img src={people} className="landingImage" alt="logo"></img>

        <Badge pill bg="success" className="landingPageText">
          <h2>Login</h2>
        </Badge>
        <Badge pill bg="success" className="landingPageText2">
          <h2>Register</h2>
        </Badge>
      </div>
      <Card>
        <div>
          <h1>
            <Badge bg="dark">We Care</Badge>
          </h1>
          <hr></hr>
          <br />

          <br />

          <h2>
            <Badge bg="danger">Urgent Fundraising</Badge>
          </h2>
          <br />

          <CampaignInfo />
          <br />
          <br />

          <hr></hr>
          <h2>
            <Badge bg="success">Coming to a end</Badge>
          </h2>
          <br />

          <CampaignInfo />

          <h2>Prayers from Good People</h2>
          <hr></hr>
          <CommentInfo />
        </div>
      </Card>
    </div>
  );
};

export default LandingPage;
