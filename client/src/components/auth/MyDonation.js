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
export default myDonation;
