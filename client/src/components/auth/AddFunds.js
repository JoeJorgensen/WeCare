import react, { useContext, useEffect, useState } from "react";
import BraintreeDropin from "braintree-dropin-react";
import braintree from "braintree-web-drop-in";

import axios from "axios";
import {
  Button,
  Card,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";
import React from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddFunds = (props) => {
  const { user, setUser } = useContext(AuthContext);

  const [loaded, setLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const BraintreeSubmitButton = ({ onClick, isDisabled, text }) => {
    if (amount < 1) {
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outline-danger"
            onClick={handleClose}
            style={{ margin: "4px" }}
          >
            Close
          </Button>
          <Button style={{ margin: "4px" }} variant="success" disabled>
            Add Amount
          </Button>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outline-danger"
          onClick={handleClose}
          style={{ margin: "4px" }}
        >
          Close
        </Button>

        <Button
          style={{ margin: "4px" }}
          variant="success"
          onClick={(onClick, handleSubmit)}
          disabled={isDisabled}
        >
          {text}
        </Button>
      </div>
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/users/${user.id}`, {
        balance: user.balance + parseInt(amount),
      });
      setUser(res.data);
    } catch (error) {
      alert("error adding donation");
    } finally {
      handleClose();
      window.scrollTo(0, 0);
    }
  };

  const getToken = async () => {
    try {
      let res = await axios.get("/api/braintree_token");
      setToken(res.data);
      setLoaded(true);
    } catch (error) {
      alert("error getting token");
    }
  };
  const handlePaymentMethod = async (payload) => {
    try {
      let res = await axios.post("/api/payment", { amount, ...payload });
    } catch (error) {
      //needs great error handling here

      alert("error receiving payment");
    }
  };
  if (!loaded) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        Add Funds
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>

                <FormControl
                  type="number"
                  value={amount}
                  required
                  placeholder="200"
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <BraintreeDropin
              braintree={braintree}
              authorizationToken={token}
              handlePaymentMethod={handlePaymentMethod}
              renderSubmitButton={BraintreeSubmitButton}
            />
            <Form.Group className="mb-3"></Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFunds;
