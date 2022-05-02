import react, { useContext, useEffect, useState } from "react";
import BraintreeDropin from "braintree-dropin-react";
import braintree from "braintree-web-drop-in";
import Card1 from "../../providers/Card";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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

const Braintree = ({addPayment, updateCampaignCard}) => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [campaignAmount, setCampaignAmount] = useState("");
  const [comment, setComment] = useState("");
  const [campaign, setCampaign] = useState([])



  useEffect(() => {
    getToken();
    getCampaignInfo();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCampaignInfo = async () => {
    let resX = await axios.get(`/api/campaigns/${params.id}`);
    setCampaign(resX.data);
    setCampaignAmount(resX.data.current_amount);
  };

  
  const BraintreeSubmitButton = ({ onClick, isDisabled, text }) => {
    if (amount <= 0) {
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
    setCampaignAmount(campaignAmount + parseInt(amount))
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
      image: campaign.image,
      description: campaign.description,
      name: campaign.name,
      current_amount: campaignAmount + parseInt(amount) ,
      id: campaign.id,
      goal: campaign.goal,
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
      updateCampaignCard(campaignUpdate)
      
      addPayment(cardInfo)
      setAmount("");
      setComment("");
      setAnonymous(false);


      let res2 = await axios.put(`/api/campaigns/${params.id}`, {
        current_amount: campaignAmount + parseInt(amount),
      });
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
    <Card1>
      <Button bg='denim' onClick={handleShow}>
       Donate With Card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay with card</Modal.Title>
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

            <BraintreeDropin
              braintree={braintree}
              authorizationToken={token}
              handlePaymentMethod={handlePaymentMethod}
              renderSubmitButton={BraintreeSubmitButton}
            />
            <Form.Group className="mb-3"></Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
        
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Card1>
  );
};

export default Braintree;
