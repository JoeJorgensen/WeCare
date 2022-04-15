import axios from "axios";
import Card from 'react-bootstrap/esm/Card'
import Card1 from '../../providers/Card'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";

const CampaignShow = () => {
  const params = useParams()
  const navigate = useNavigate()
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
        <Card1 key={d.id} style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Card border="info" style={{ width: '18rem' }} >
        <Card.Img variant="top" src={d.image} />
        <Card.Body>
          <Badge bg='dark'><Card.Title style={{marginBottom:'0px'}}>{d.name}</Card.Title></Badge>
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

    } catch (error) {
      alert('error when getting updates')
    }
  }

  
  const renderUpdates = () => {
    return updates.map((u) => {
      return (
        // <Card1 key={u.id}>

        //   <Badge bg='dark'>
        //     <h6 style={{marginBottom:'0px'}}>Updates</h6>
        //     </Badge>
        //     <br/>
        //     {u.comment}
        //   <br/>
        //   <br/>

        //   <img src={u.image}/>

        // </Card1>

         <Card1 key={u.id} style={{display: 'flex' , justifyContent: 'center', flexWrap: 'wrap'}}>
         <Card border="info" style={{ width: '18rem' }} >
         <Card.Body>
           <Card.Title>{u.comment}</Card.Title>
         <Card.Img variant="top" src={u.image} /> 
         <p>{u.created_at}</p>
         </Card.Body>
       </Card>
       </Card1>
      )
    })
  }
  const getCampaign = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}`)
      setCampaign(res.data)

    } catch (error) {
      alert('error occurred getting campaign')
      console.log(error)
    }
  }

  const renderCampaign = () => {
    return (
     
        <Card1 key={campaign.id} style={{display: 'flex' , flexWrap: 'wrap'}}>
        <Card border="info" style={{ width: '50rem' }} >
        <Card.Body>
          <Badge bg="dark">
            <Card.Title style={{marginBottom:'0px'}}>
            {campaign.name}</Card.Title></Badge>
            <br/>
            <br/>

        <Card.Img variant="top" src={campaign.image} /> 
          <p>Current: ${campaign.current_amount}</p>
          <p>Goal: ${campaign.goal}</p>
          <Card.Text>
            {campaign.description}
          </Card.Text>
          <Card.Text>
          Created: {campaign.created_at}
          </Card.Text>
          <Card.Text>
            Ends: {campaign.expiration}
             </Card.Text>
          <Button variant="primary" onClick={()=> navigate('/donate') }>Donate</Button>

        </Card.Body>
      </Card>
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
