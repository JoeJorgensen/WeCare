import Card from "../../providers/Card";
import useAxios from "axios-hooks";
import AxiosContainer from "../../providers/AxiosContainer";
import StringifyJSON from "../../providers/StringifyJSON";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";
import CommentInfo from "../CommentInfo";
import { Badge } from "react-bootstrap";

const Feed = () => {
  return (
    <Card>
      <div>
        <h1>
          <Badge pill bg="dark" >We Care</Badge>
        </h1>
        <hr></hr>
        <br />

        <h2>
          <Badge  pill bg="info">Wallet Balance</Badge>
          <br />
          <br />

          <WalletBalance />
        </h2>
        <hr></hr>
        <br />

        <h2>
          <Badge  pill bg="danger">Urgent Fundraising</Badge>
        </h2>
        <br />

        <CampaignInfo />
        <br />
        <br />

        <hr></hr>
        <h2>
          <Badge pill bg="success">Coming to a end</Badge>
        </h2>
        <br />

        <CampaignInfo />

        <h2>Prayers from Good People</h2>
        <hr></hr>
        <CommentInfo />
      </div>
    </Card>
  );
};

export default Feed;
