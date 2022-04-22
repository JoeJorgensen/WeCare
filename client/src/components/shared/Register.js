import { useContext, useState } from "react";
import { parsePath, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import Card from "../../providers/Card";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate()
  // not need but nice for UX
  // const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // with devise_token_auth
    // email must be 'valid' email and unique
    // password must be greater than = 6 chars in length
    auth.handleRegister({ email, password, name });
    navigate('/feed')
  };
  return (
    <Card >
      <div className="head">
        <h1 className="heading">Register</h1>
        <br />
        <Form onSubmit={handleSubmit} className="container">
<<<<<<< HEAD
          <div className="mainbox">
          <div className="form-outline mb-4">
=======
          {/* <div className=" mainbox2 form-outline mb-4">
>>>>>>> 1efb106c78b6caac76eeafa8133cf966efeca3bd
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              id="form2Example4"
              className="form-control"
              placeholder="Name"
            />
<<<<<<< HEAD
          </div>
          <div className="form-outline mb-4">
=======
          </div> */}
          <div className="mainbox2">
>>>>>>> 1efb106c78b6caac76eeafa8133cf966efeca3bd
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="form2Example3"
              className="form-control"
              placeholder="Email"
            />
          </div>

<<<<<<< HEAD
          <div className="form-outline mb-4">
=======
          <br />
          
          <div className="mainbox2">
>>>>>>> 1efb106c78b6caac76eeafa8133cf966efeca3bd
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="form-control"
            />
          </div>

          <button
            type="button"
            className="signin btn btn-primary btn-block mb-4"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Register
          </button>
          <div className="col">
            {/* <!-- Simple link --> */}
            <a href="/troubleshoot">Having Trouble?</a>
          </div>
          <hr/>

          </div>
        </Form>
      </div>
    </Card>
  );
};
export default Register;











