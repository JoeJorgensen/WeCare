import Card from "../../providers/Card";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";
import CommentInfo from "../CommentInfo";
import { Badge } from "react-bootstrap";
import ExpirationInfo from "../ExpirationInfo";

const Feed = () => {
  return (
    <Card>
      <h2>
        <Badge pill bg='success' >
          Wallet Balance
        </Badge>
        <br />
      </h2>

      <h2>
        <Badge pill bg="info">
          <WalletBalance />
        </Badge>
      </h2>
    <br/>
        <h2>
          <Badge pill bg="danger">
            Urgent Fundraising
          </Badge>
        </h2>
        <br />

        <ExpirationInfo />
        <br />
        <br />

        <hr></hr>
        <h2>
          <Badge pill bg="success">
            Coming to an end
          </Badge>
        </h2>
        <br />


      <CampaignInfo />

      <hr></hr>
      <h2>
        <Badge pill>Prayers from Good People</Badge>
      </h2>
      <br />
      <CommentInfo />
    </Card>
  );
};

export default Feed;
