import Card from "../../providers/Card";
import "./AboutStyle.css";
import DevImages from "./DevImages";

const About = () => {
  return (
    <Card>
        <h1>
          <u>WeCare Devs</u>
        </h1>
        <hr></hr>
      <DevImages />
      <h3 style={{textDecoration: "underline"}}>This is our development team!</h3>
      <h4>We are here to make sure you have a fun and functioning website that suites your needs and wants.</h4>
      <hr></hr>
      <h4>Over the course of 3-4 weeks we have built this responsive website that allows you to register a new user, create a fundraising campaign, donate to other campaigns and have others donate to yours! </h4>
      <hr></hr>
      <h4>You can also post updates to your campaign to let your donators know how things are going!</h4>
      <hr></hr>
    </Card>
  );
};
export default About;
