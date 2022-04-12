import React, { useContext, useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";

import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";

import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/esm/Badge";
import Card from "../../providers/Card";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Profile() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const { user, setUser } = useContext(AuthContext);

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
      setUser(res.data);
    } catch (err) {
      alert("error occurred updating");
      console.log(err)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault() 
    try{
      let res = await axios.put(`/api/users/${user.id}`, {name})
      setUser(res.data)
    }catch(err){
      alert('error updating user info')
    }finally{handleImage()}
  }

  return (
    <div className="App">
      <br />
      <br />

      <Badge bg="dark">
        <h1>Profile Page</h1>
      </Badge>
      <br />
      <br />
      {user.id}
      {user.name}
      {!user.image && <p>no name</p>}


      {user.image && <img src={user.image} width={300} />}
      {!user.image && <p>no image</p>}
      <Card>
        <form>
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

          <input value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />

          <Badge>
            <p style={{ marginBottom: "0px" }}>Image</p>
          </Badge>
          <br />
          <br />

          <FilePond
            files={files}
            allowMultiple={false}
            onupdatefiles={handleUpdate}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <Button onClick={handleSubmit}>Update Profile</Button>
        </form>
      </Card>
    </div>
  );
}

export default Profile;
