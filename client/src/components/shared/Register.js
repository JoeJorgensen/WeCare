import { useContext, useState } from "react";
import { parsePath, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import Card from "../../providers/Card";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  // not need but nice for UX
  // const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    auth.handleRegister({ email, password, name });
    navigate("/");
  };
  return (
    <Card style={{ height: "73vh" }}>
      <div className="head">
        <h1 className="heading">Register</h1>
        <br />
        <Form onSubmit={handleSubmit} className="container">
          <div className="mainbox">
            <div className="form-outline mb-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="form2Example4"
                className="form-control"
                placeholder="Enter a Username..."
              />
            </div>
            <div className="form-outline mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="form2Example3"
                className="form-control"
                placeholder="Email..."
              />
            </div>

            <div className="form-outline mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                type="password"
                className="form-control"
              />
            </div>

            <Button
              bg="denim"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Register
            </Button>
            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="/troubleshoot">Having Trouble?</a>
            </div>
          </div>
        </Form>
      </div>
    </Card>
  );
};
export default Register;
