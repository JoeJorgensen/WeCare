import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Update = ({id}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [comment, setComment] = useState('')
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = (image) => {
    setImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("comment", comment);
    data.append("image", image[0].file);
    try {
      await axios.post(`/api/campaigns/${id}/updates`, data);
    } catch (error) {
      alert("error occurred adding your new campaign");
      console.log(error);
    } finally {
      handleClose()
      window.location.reload();
      // window.scrollTo(0)
    }
  };

  return (
    <div>
      <div>
        <Button variant="outline-success" onClick={handleShow}>
          Add Update
        </Button>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Add Campaign Update</Modal.Title>
            </Modal.Header>
          </div>

          <div>
            <Modal.Body>
              <Form>
                  <Form.Label>Image</Form.Label>
                  <FilePond
                    required
                    allowImageCrop={true}
                    allowImageTransform={true}
                    imageCropAspectRatio={"1:1"}
                    image={image}
                    allowMultiple={true}
                    onupdatefiles={handleUpdate}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Comment</Form.Label>
                  <Form.Control onChange={(e)=>setComment(e.target.value)}
                    as="textarea"
                    rows={3}
                    placeholder="Write a meaningful comment..."
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
          </div>

          <div>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </div>

        </Modal>
      </div>

      <div>
        {/* <FilePond
          required
          allowImageCrop={true}
          allowImageTransform={true}
          imageCropAspectRatio={"1:1"}
          image={image}
          allowMultiple={true}
          onupdatefiles={handleUpdate}
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        /> */}
      </div>

    </div>
  );
}

export default Update