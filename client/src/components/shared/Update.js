import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";

const Update = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Add Update
      </Button>

      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Campaign Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Image</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl 
                  placeholder="Enter image URL"/>
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
                  placeholder="Write a meaningful comment..."
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleSubmit}>
        Submit
      </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default Update