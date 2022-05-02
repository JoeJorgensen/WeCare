import React, { useContext, useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/esm/Badge";
import Card from "../../providers/Card";
import { Accordion, Form } from "react-bootstrap";

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import AddFunds from "./AddFunds";
// import DefaultProfilePic from "../shared/ProfilePic";
import ProfilePic from "../shared/Images/DefaultProfile.png";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function MyProfile() {
  const { user, setUser } = useContext(AuthContext);
  const auth = useContext(AuthContext);
  const [files, setFiles] = useState("");
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleUpdate = (files) => {
    setFiles(files);
  };

  const getUserInfo = async () => {
    let res = await axios.get(`/api/users/${user.id}`);
    setUser(res.data);
  };

  const handleImage = async (e) => {
    let data = new FormData();
    data.append("fileYO", files[0].file);
    data.append("name", name);
    // axios call
    try {
      let res = await axios.put("/api/update_image", data);

      setUser(res.data);
    } catch (err) {
      alert("error occurred updating");
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/users/${user.id}`, { name, bio });
      setUser(res.data);
      if (files) {
        await handleImage();
      }
    } catch (err) {
      alert("error updating user info");
    } finally {
      // document.location.reload()
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <div style={{
        marginTop: '50px',
        textAlign: 'center'
      }}>
        <img className="user-profile-image"
          src={user.image ? user.image : ProfilePic}
        />
        <br />
        <h1>{user.name ? user.name : <p>no name</p>}</h1>
      </div>

      <br />

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '20%',
        marginRight: '20%'
      }}>
        <div>
          <h5>${user.balance}</h5>
          <p>Wallet Balance</p>
        </div>
        <AddFunds />
      </div>

      <br />
      <br />

      <div style={{
        marginLeft: '20%',
        marginRight: '20%'
      }}>
        <h5>About</h5>
        {user.bio ? user.bio : <p>no bio</p>}
      </div>

      <hr />

      <div style={{
        textAlign: 'center',
        maxWidth: '63%',
        margin: 'auto'
      }}>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>Edit Profile</h5></Accordion.Header>
            <Accordion.Body>


              <form onSubmit={handleProfileSubmit}>
                <h1>Update Profile</h1>

                <h5>
                  <Badge bg="denim">Name</Badge>
                </h5>

                <input
                  value={name}
                  required
                  placeholder={user.name}
                  onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

                <h5>
                  <Badge bg="denim">Bio</Badge>
                </h5>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <textarea
                    as="textarea"
                    rows={5}
                    cols={50}
                    placeholder="About user..."
                    onChange={(e) => setBio(e.target.value)}
                  />
                </Form.Group>

                <h5><Badge bg="denim">Image</Badge></h5>

                <FilePond
                  allowImageCrop={true}
                  allowImageTransform={true}
                  imageCropAspectRatio={"1:1"}
                  files={files}
                  allowMultiple={false}
                  onupdatefiles={handleUpdate}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                <Button type="submit">Update Profile</Button>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default MyProfile;
