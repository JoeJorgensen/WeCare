import Card from "../../providers/Card";
import useAxios from "axios-hooks";
import AxiosContainer from "../../providers/AxiosContainer";
import StringifyJSON from "../../providers/StringifyJSON";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";
import CommentInfo from "../CommentInfo";
import { Badge, Pagination } from "react-bootstrap";
import people from "../shared/Images/We-CareImg.jpg";
import { useNavigate } from "react-router-dom";
import LandingPageImg from "./LandingPageImg";
import Logo from "./Images/WecareLogo.png";
import ExpirationInfo from "../ExpirationInfo";

const LandingPage = () => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <LandingPageImg />
      </div>
      <Card>
        <div>
          <br />
          <div style={{ display: "inline-flex" }}>
            <img style={{ height: "145px" }} src={Logo}></img>


          </div>
          <h2>A place to fundraise for the most important of events</h2>
          <br></br>
          <h2>
            <Badge bg="denim">Urgent Fundraising</Badge>
          </h2>
          <br />

          <ExpirationInfo />
          <br />
          <br />

          <hr></hr>
          <h2>
            <Badge bg="denim">Coming to an end</Badge>
          </h2>
          <br />

          <CampaignInfo />

          <hr></hr>
          <h2>
            <Badge bg="denim">Prayers from good people</Badge>
          </h2>
          <br />
          <CommentInfo />
        </div>
      </Card>
    </div>
  );
};

export default LandingPage;
