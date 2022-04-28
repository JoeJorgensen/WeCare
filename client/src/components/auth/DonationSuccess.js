import { useState, React } from "react";
import { Modal, Button } from "react-bootstrap";
import GroupPNG from "../shared/Images/Group.png";
import SuccessPNG from "../shared/Images/Successful.png";
import Card from "../../providers/Card";

function DonationSuccess(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Card>
        <Modal.Body>
          <div>
            <img src={GroupPNG}></img>
          </div>
          <img src={SuccessPNG}></img>
          <br></br>
          <br></br>

          <p>Thank you for making a donation</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Card>
    </Modal>
  );
}

function RenderDonationSuccess() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card>
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <DonationSuccess show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </Card>
  );
}

export default RenderDonationSuccess;
