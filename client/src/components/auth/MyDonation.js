import Card from "../../providers/Card";
import MyDonation from "../MyDonationInfo";
import Calendar from "../calendar/Calendar";
// import Footer from "../Footer";

const myDonation = () => {
  return (
    <Card>
      <div>
        <h1>We Care</h1>
        <hr></hr>
        <Calendar />
        <h2>
          <u>My Donations:</u>
        </h2>
        <h3>$500.50</h3>

        <h2>My Donations</h2>
        <hr></hr>
        <MyDonation />

      </div>
      
    </Card>
    
  );
};
export default myDonation;
