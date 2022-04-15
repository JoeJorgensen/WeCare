import Card from "../../providers/Card";
import useAxios from "axios-hooks";
import AxiosContainer from "../../providers/AxiosContainer";
import StringifyJSON from "../../providers/StringifyJSON";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";
import CommentInfo from "../CommentInfo";

const Feed = () => {
  return (
    <Card>
      <div>
        <h1>We Care</h1>
        <hr></hr>
        <h2>
          <u>Wallet Balance:</u>
          <WalletBalance />
        </h2>

        <h2>Urgent Fundraising:</h2>
        <hr></hr>
        <CampaignInfo />

        <h2>Coming to a end:</h2>
        <hr></hr>
        <CampaignInfo />

        <h2>Prayers from Good People</h2>
        <hr></hr>
        <CommentInfo />
      </div>
    </Card>
  );
};

export default Feed;
