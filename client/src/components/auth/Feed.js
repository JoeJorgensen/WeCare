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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in
          metus vulputate eu scelerisque felis. Et netus et malesuada fames ac
          turpis egestas integer eget. Nam at lectus urna duis convallis.
          Vehicula ipsum a arcu cursus vitae congue. Risus in hendrerit gravida
          rutrum quisque non tellus orci. Mi tempus imperdiet nulla malesuada
          pellentesque. Cras fermentum odio eu feugiat pretium nibh ipsum
          consequat nisl.
        </p>
      </div>
    </Card>
  );
};

export default Feed;
