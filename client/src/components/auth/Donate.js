import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Braintree, { PaymentContext } from "./Payment";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormControl,
  InputGroup,
  Modal,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

function Donate() {
  const params = useParams();
  const { user, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [campaignAmount, setCampaignAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCampaignInfo();
  }, []);

  const insufficientFunds = () => {
    if (amount > user.balance) {
      return (
        <>
          <Button variant="success" onClick={handleSubmit} disabled>
            Insufficient Funds
          </Button>
        </>
      );
    } else if (amount <= 0) {
      return (
        <>
          <Button variant="success" onClick={handleSubmit} disabled>
            Add greater than 0
          </Button>
        </>
      );
    }

    return (
      <Button variant="success" onClick={handleSubmit}>
        Submit
      </Button>
    );
  };

  const donateSuccess = () => {
    return (
      <Alert show={show} variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <p> Thanks for your support!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    );
  };

  const getCampaignInfo = async () => {
    let resX = await axios.get(`/api/campaigns/${params.id}`);
    setCampaignAmount(resX.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user)
      return (
        <>
          <p>Must be logged in to donate</p>
          <Button pill>
            <Link to="/login" />
          </Button>
          <Button pill>
            <Link to="/register" />
          </Button>
        </>
      );

    let donation = {
      amount,
      comment,
      anonymous,
      user_id: user.id,
    };

    try {
      console.log("User balance before donation:", user.balance);
      console.log("campaign_id:", params.id);
      console.log("campaign amount 1:", campaignAmount.current_amount);
      console.log(
        "NEW CAMPAIGN AMOUNT:",
        campaignAmount.current_amount + amount
      );

      let res = await axios.post(
        `/api/campaigns/${params.id}/donations`,
        donation
      );
      console.log(res.data);

      let res1 = await axios.put(`/api/users/${user.id}`, {
        balance: Math.max(0, (user.balance -= amount)),
      });
      setUser(res1.data);
      let res2 = await axios.put(`/api/campaigns/${params.id}`, {
        current_amount: (campaignAmount.current_amount += parseInt(amount)),
      });
      console.log(
        "campaign amount after donation:",
        campaignAmount.current_amount
      );

      console.log("userBalance after donation:", user.balance);
      console.log(res1.data);
      console.log("donation:", donation);
    } catch (error) {
      console.log(error);
      alert("error adding donation");
    } finally {
      handleClose();
      window.scrollTo(0, 0);
      document.location.reload()
      donateSuccess();
    }
  };

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Donate
      </Button>

      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pay with wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Amount</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>

                  <FormControl
                    type='number'
                    value={amount}
                    required
                    placeholder="ex. 200"
                    onChange={(e) => setAmount(e.target.value)}
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comment}
                  placeholder="Write a meaningful comment..."
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Appear anonymous"
                  onChange={(e) => setAnonymous(true)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Braintree />

            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
            {insufficientFunds()}
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default Donate;
