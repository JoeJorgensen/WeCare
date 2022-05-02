import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Braintree, { PaymentContext } from "./Payment";
import axios from "axios";
import RenderDonationSuccess from "./DonationSuccess";
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

function Donate({ addDonation, updateCampaign }) {
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

      let campaignUpdate = {
        image: campaignAmount.image,
        description: campaignAmount.description,
        name: campaignAmount.name,
        current_amount: campaignAmount.current_amount + parseInt(amount) ,
        id: campaignAmount.id,
        goal: campaignAmount.goal,
        created_at: new Date().toISOString(),
        }

    let donation = {
      amount,
      comment,
      anonymous,
      user_id: user.id,
    };

    let cardInfo = {
      amount,
      comment,
      anonymous,
      user_id: user.id,
      image: user.image,
      name: user.name,
      created_at: new Date().toISOString(),
    };

    try {
      let res = await axios.post(
        `/api/campaigns/${params.id}/donations`,
        donation
      );

      updateCampaign(campaignUpdate)

      addDonation(cardInfo);

      setAmount("");
      setComment("");
      setAnonymous(false);

      let res1 = await axios.put(`/api/users/${user.id}`, {
        balance: Math.max(0, (user.balance -= amount)),
      });
      setUser(res1.data);
      let res2 = await axios.put(`/api/campaigns/${params.id}`, {
        current_amount: (campaignAmount.current_amount += parseInt(amount)),
      });
    } catch (error) {
      alert("error adding donation");
    } finally {
      handleClose();
    }
  };
  if (!user) {
    return (
      <Button variant="outline-primary" disabled>
        Login to Donate
      </Button>
    );
  }
  return (
    <>
      <Button  bg='denim'  onClick={handleShow}>
        Donate with wallet
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
                    type="number"
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
