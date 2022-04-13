import { Link } from "react-router-dom";
import Card from "../../providers/Card";
import { Alert } from "react-bootstrap";

const NoMatch = () => (
  <Card>
    <Alert variant="danger" dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Page not found.... Return <Link to="/feed"> Home</Link>{" "}
      </p>
    </Alert>
  </Card>
);

export default NoMatch;
