import axios from "axios";
import Card from 'react-bootstrap/esm/Card'
import Card1 from '../../providers/Card'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";

const CampaignShow = () => {
  const params = useParams()
  const [campaign, setCampaign] = useState([])
  const [updates, setUpdates] = useState([])
  const [donations, setDonations] = useState([])


  useEffect(() => {
    getCampaign()
    getUpdates()
    getDonations()
  }, [])




  const getDonations = async () => {
    try {
      let res = await axios.get(`/api/donation_by_user/${params.id}`)
    setDonations(res.data)
    console.log('donations:', res.data)
    } catch (error) {
      alert('error getting donations')
    }
    
    
  }

  const renderDonations = ()=>{
    return donations.map((d)=> {
      return (
        


        // <Card key ={d.id}>
        //   <Badge bg = 'dark '><h6>Donations</h6></Badge>
        //   <br/>
        //   <br/>
          
        //   <Badge><h6>{d.name}</h6></Badge>
          
        //   <img src={d.image} />
        //   <br/>
        //   <br/>

        //   <Badge bg='info'><p>{d.comment}</p></Badge>
        //   <br/>
        //   <br/>
        //   <Badge bg='info'><h6>Donation: ${d.amount}</h6></Badge>
        // </Card>
        <Card1 key={d.id}>
        <Card border="info" style={{ width: '18rem' }} >
        <Card.Img variant="top" src={d.image} />
        <Card.Body>
          <Card.Title>{d.name}</Card.Title>
          <p>${d.amount}</p>
          <Card.Text>
            {d.comment}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      </Card1>
      )
    })
  
  }


  
  const getUpdates = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}/updates`)
      setUpdates(res.data)
      console.log('updates', res.data)
    } catch (error) {
      alert('error when getting updates')
    }
  }

  
  const renderUpdates = () => {
    return updates.map((u) => {
      return (
        <Card1 key={u.id}>
          <Badge bg='dark'>
            <h6 style={{marginBottom:'0px'}}>Updates</h6>
            </Badge>
            <br/>
            {u.comment}
          <br/>
          <br/>

          <img src={u.image}/>
        </Card1>
      )
    })
  }
  const getCampaign = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}`)
      setCampaign(res.data)
      console.log('campaign', res.data)
    } catch (error) {
      alert('error occurred getting campaign')
      console.log(error)
    }
  }

  const renderCampaign = () => {
    return (
      <Card1>
        <div>
        <Badge bg='dark' ><h6 style={{marginBottom:'0px'}}>{campaign.name}</h6></Badge>
        <br/>
        <br/>

        <img src={campaign.image} />
        {!campaign.image && <p>no image</p>}
        <p>Description: {campaign.description}</p>
        <p>Current Amount: ${campaign.current_amount}</p>
        <p>Goal: ${campaign.goal}</p>
        <p>Ends: {campaign.expiration}</p>
        </div>
      </Card1>
    );
  }

  return (
    <div>
      {renderCampaign()}
      {renderUpdates()}
      {renderDonations()}
    </div>
  )

};
export default CampaignShow;
