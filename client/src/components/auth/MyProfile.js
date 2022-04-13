import React, { useContext, useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import FilePondPluginImageCrop from "filepond-plugin-image-crop";
// import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";

import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/esm/Badge";
import Alert from "react-bootstrap/esm/Alert";

import Card from "../../providers/Card";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
  // FilePondPluginImageCrop,
  // FilePondPluginImageTransform,
);

function MyProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [files, setFiles] = useState(null);
  const [name, setName] = useState(user.name);

  const handleUpdate = (files) => {
    setFiles(files);
  };

  const handleImage = async (e) => {
    let data = new FormData();
    data.append("fileYO", files[0].file);
    data.append("name", name);
    // axios call
    try {
      console.log("trying to update with data:");
      let res = await axios.put("/api/update_image", data);
      console.log("after await handleImage");
      setUser(res.data);
    } catch (err) {
      alert("error occurred updating");
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/users/${user.id}`, { name });
      setUser(res.data);
      if (files) {
        await handleImage();
      }
      console.log("after await handleImage in handleSubmit");
    } catch (err) {
      alert("error updating user info");
    } finally {
      // document.location.reload()
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="App">
      <br />
      <br />

      <Badge bg="dark">
        <h1>Profile Page</h1>
      </Badge>
      <br />
      <br />
      {user.image && (
        <img
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            aspectRatio: "auto",
          }}
          src={user.image}
          width={300}
        />
      )}
      <br/>
      <br/>

      <Badge>
        <h5>{user.name}</h5>
      </Badge>
      {!user.name && <p>no name</p>}
      <br />
      <br />
      <Badge>
        <h5>Balance: ${user.balance}</h5>
      </Badge>
      {!user.balance && <p>You broke</p>}
      <br />
      <br />

      {!user.image && <p>no image</p>}
      <Card>
        <form onSubmit={handleSubmit}>
          <Badge bg="dark">
            <h1>Update Profile</h1>
          </Badge>
          <br />
          <br />
          <Badge>
            <p style={{ marginBottom: "0px" }}>Name</p>
          </Badge>
          <br />
          <br />

          <input
            value={name}
            required
            placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <br />

          <Badge>
            <p style={{ marginBottom: "0px" }}>Image</p>
          </Badge>
          <br />
          <br />

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
      </Card>
    </div>
  );
}

export default MyProfile;
