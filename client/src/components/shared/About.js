import { Badge } from "react-bootstrap";
import Card from "../../providers/Card";

const About = () => {
  return (
    <Card>
      <div>
        <h1>
          <u>Our WeCare Dev Team:</u>
        </h1>
        <hr></hr>
        <h3>

            <Badge bg='info'>Randy</Badge>
            <br/>
            <br/>
            <Badge bg='info'>Joe</Badge>
            <br/>
            <br/>
            <Badge bg='info'>Steve</Badge>
            <br/>
            <br/>
            <Badge bg='info'>Austin</Badge>
            <br/>
            <br/>




            

        </h3>
      </div>
    </Card>
  );
};
export default About;
