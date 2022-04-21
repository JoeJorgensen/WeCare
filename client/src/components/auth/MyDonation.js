import Card from "../../providers/Card";
import MyDonation from "../MyDonationInfo";
import Calendar from "../calendar/Calendar";

const myDonation = () => {

  return (
    <Card>
      <div>
        <h1>We Care</h1>
        <hr></hr>
        <Calendar />
        <h2>My Donations</h2>
        <hr></hr>
        <MyDonation />
      </div>
    </Card>
  );
};
export default myDonation;
