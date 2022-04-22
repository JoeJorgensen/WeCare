import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import { useNavigate } from "react-router-dom";

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);


const NewCampaign = () => {
  const { user } = useContext(AuthContext)

  const [files, setFiles] = useState('')
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [goal, setGoal] = useState(null)
  const [expiration, setExpiration] = useState('')
  const [description, setDescription] = useState('')
  const [currentAmount] = useState(0)
  const [campaign, setCampaign] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      let res = await axios.get('/api/categories')
      setCategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (files) => {
    setFiles(files);
  };

  const renderCategorySelect = () => {
    return (
      <Form.Select required value={category} onChange={(e) => setCategory(e.target.value)} label='Select' aria-label="Select Category" >
        <option hidden></option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </Form.Select>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = new FormData()
    data.append('name', title)
    data.append('description', description)
    data.append('current_amount', currentAmount)
    data.append('goal', goal)
    data.append('expiration', expiration)
    data.append('user_id', user.id)
    data.append("file", files[0].file);
    try {
      let res = await axios.post('/api/campaigns', data)
      setCampaign(res.data)
      console.log(campaign)
      navigate('/feed')
    } catch (error) {
      alert('error occurred adding your new campaign')
      console.log(error)
    }
  }

  return (
    <div>
      <div>
        <h1>Create New Fundraising</h1>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <FilePond
              required
              allowImageCrop={true}
              allowImageTransform={true}
              imageCropAspectRatio={"1:1"}
              files={files}
              allowMultiple={true}
              onupdatefiles={handleUpdate}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
          </Form.Group>
          <div style={{ border: '1px solid' }}>
            <h5>Fundraising Details</h5>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control required value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              {categories && renderCategorySelect()}
            </Form.Group>
            <Form.Group>
              <Form.Label>Goal</Form.Label>
              <Form.Control required value={goal} onChange={(e) => setGoal(e.target.value)} type="text" placeholder="Enter required amount" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Donation Expiration Date</Form.Label>
              <Form.Control required value={expiration} onChange={(e) => setExpiration(e.target.value)} type="date" name="Expiration" placeholder="Donation Expiration" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control required value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </div>

        </Form>


      </div>
    </div>

  )
}

export default NewCampaign