import { Link } from "react-router-dom";
import Card from "../../providers/Card";

const NoMatch = () => (
  <Card>
    <h3>
      Error: Page not found return
      <Link to="/feed"> Home</Link>
    </h3>
  </Card>
);

export default NoMatch;
