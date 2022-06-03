import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import Card from "../../providers/Card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  // not need but nice for UX
  // const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.handleLogin({ email, password });
  };
  return (
    <Card style={{ height: "73vh" }}>
      <div className=" head">
        <h1 className="login">Login</h1>

        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="mainbox">
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              {/* <label class="form-label" for="form2Example1">Email address:</label> */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="form2Example1"
                className="form-control"
                placeholder="Email Address"
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              {/* <label class="form-label" for="form2Example2">Password:</label> */}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="form2Example2"
                className="form-control"
                placeholder="Password"
              />
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label className="form-check-label" form="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col">
                {/* <!-- Simple link --> */}
                <a href="/troubleshoot">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="button"
              className=" signin btn btn-primary btn-block mb-4"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign in
            </button>
          </div>
          <hr></hr>
        </Form>
      </div>
    </Card>
  );
};
export default Login;
