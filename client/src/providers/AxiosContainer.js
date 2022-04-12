import useAxios from "axios-hooks";
import { Alert, Spinner } from "react-bootstrap";

const AxiosContainer = ({ title, loading, error, children }) => {
  const renderBody = () => {
    if (loading)
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading... Please wait</span>
        </Spinner>
      );

    if (error)
      return (
        <Alert variant="danger" dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Please try again.</p>
        </Alert>
      );
    return children;
  };
  return (
    <div>
      <h1>{title}</h1>
      {renderBody()}
    </div>
  );
};

export default AxiosContainer;
