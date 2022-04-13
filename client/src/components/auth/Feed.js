import Card from "../../providers/Card";
import useAxios from "axios-hooks";
import AxiosContainer from "../../providers/AxiosContainer";
import StringifyJSON from "../../providers/StringifyJSON";
import CampaignInfo from "../CampaignInfo";
import WalletBalance from "../WalletBalanceInfo";

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
        <ul>
          <li>Fundraising 1</li>
          <li>Fundraising 1</li>
          <li>Fundraising 1</li>
        </ul>
        <h2>Coming to a end:</h2>
        <hr></hr>
        <ul>
          <li>Fundraising 1</li>
          <li>Fundraising 1</li>
          <li>Fundraising 1</li>
        </ul>
        <h2>Prayers from Good People</h2>
        <hr></hr>
        <ul>
          <li>Comment 1</li>
          <li>Comment 1</li>
          <li>Comment 1</li>
        </ul>
   
      </div>
    </Card>
  );
};

export default Feed;
