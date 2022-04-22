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
      <h2>
        <Badge pill bg='success' >
          Wallet Balance
        </Badge>
        <br />
      </h2>

      <h2>
        <Badge pill bg="dark">
          <WalletBalance />
        </Badge>
      </h2>

      <hr></hr>
      <br />

      <h2>
        <Badge pill bg="danger">
          Urgent Fundraising
        </Badge>
      </h2>
      <br />

      <CampaignInfo />
      <br />
      <br />

      <hr></hr>
      <h2>
        <Badge pill bg="success">
          Coming to a end
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
