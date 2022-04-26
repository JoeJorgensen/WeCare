import Card from "../../providers/Card";
import MyDonation from "../MyDonationInfo";
import Calendar from "../calendar/Calendar";
import Logo from "../shared/Images/WecareLogo.png";

const myDonation = () => {
  return (
    <Card>
      <div>
        <img style={{ height: "145px" }} src={Logo}></img>
        <h1>My Donations</h1>
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
