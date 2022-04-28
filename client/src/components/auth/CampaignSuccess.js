import { useState, React } from "react";
import { Modal, Button } from "react-bootstrap";
import GroupPNG from "../shared/Images/Group.png";
import Card from "../../providers/Card";

function CampaignSuccess(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Card>
        <Modal.Body>
          <img src={GroupPNG}></img>
          <br></br>
          <br></br>
          <h4>New Fundraising Campaign Submitted</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Card>
    </Modal>
  );
}

function RenderCampaignSuccess() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card>
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <CampaignSuccess show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </Card>
  );
}

export default RenderCampaignSuccess;
