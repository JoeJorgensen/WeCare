import axios from "axios";
import Card from "react-bootstrap/esm/Card";
import Card1 from "../../providers/Card";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import Donate from "../auth/Donate";
import WalletBalance from "../WalletBalanceInfo";

const CampaignShow = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getCampaign();
    getUpdates();
    getDonations();
  }, []);

  const getDonations = async () => {
    try {
      let res = await axios.get(`/api/donation_by_user/${params.id}`);
      setDonations(res.data);
    } catch (error) {
      alert("error getting donations");
    }
  };

  const renderDonations = () => {
    return donations.map((d) => {
      return (
        <Card key={d.id} border="info" style={{ width: "18rem" }}>
          <Card.Body>
            <div
              style={{
                display: "flex-inline",
                textAlign: "left",
                justifyContent: "space-evenly",
              }}
            >
              <Card.Img
                src={d.image}
                width={300}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  margin: "7px",
                }}
              />

              <Badge bg="dark">
                <Card.Title style={{ marginBottom: "0px" }}>
                  {d.name}
                </Card.Title>
              </Badge>
              <br />
            </div>
            <h4>
              <Badge>${d.amount}</Badge>
            </h4>
            <hr></hr>
            <Card.Text>{d.comment}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      );
    });
  };

<<<<<<< HEAD
        <Card key={d.id} border="info" style={{ width: '18rem' }} >


         <Card.Body>
           <div style={{display:'flex-inline', textAlign: 'left',   justifyContent:'space-evenly' }}>
        <Card.Img src={d.image}
          width={300}
          style={{
            objectFit: 'cover',
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            margin: "7px",
          }}
          
          />
      
          <Badge pill bg='dark'><Card.Title style={{marginBottom:'0px'}}>{d.name}</Card.Title></Badge>
          <br/>
         </div> 
         <h4>
         <Badge pill>${d.amount}</Badge>
         </h4>
         <hr></hr>
          <Card.Text>
           
            {d.comment}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      )
    })
  
  }


  
=======
>>>>>>> 33cfce1353cf6ab07865479d3ae5bcb04e82d144
  const getUpdates = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}/updates`);
      setUpdates(res.data);
    } catch (error) {
      alert("error when getting updates");
    }
  };

  const renderUpdates = () => {
    return updates.map((u) => {
      return (
        <Card key={u.id} border="info" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={u.image} />
            <br />
            <br />

            <Card.Title>{u.comment}</Card.Title>
            <p>{u.created_at}</p>
          </Card.Body>
        </Card>
      );
    });
  };
  const getCampaign = async () => {
    try {
      let res = await axios.get(`/api/campaigns/${params.id}`);
      setCampaign(res.data);
    } catch (error) {
      alert("error occurred getting campaign");
      console.log(error);
    }
  };

  const renderCampaign = () => {
    return (
      <Card key={campaign.id} border="info" style={{ width: "50rem" }}>
        <Card.Body>
<<<<<<< HEAD
          <Badge pill bg="dark">
            <Card.Title style={{marginBottom:'0px'}}>
            {campaign.name}</Card.Title></Badge>
            <br/>
            <br/>
=======
          <Badge bg="dark">
            <Card.Title style={{ marginBottom: "0px" }}>
              {campaign.name}
            </Card.Title>
          </Badge>
          <br />
          <br />
>>>>>>> 33cfce1353cf6ab07865479d3ae5bcb04e82d144

          <Card.Img variant="top" src={campaign.image} />
          <p>Current: ${campaign.current_amount}</p>
          <p>Goal: ${campaign.goal}</p>
          <Card.Text>{campaign.description}</Card.Text>
          <Card.Text>Created: {campaign.created_at}</Card.Text>
          <Card.Text>Ends: {campaign.expiration}</Card.Text>
          {/* <Card.Text>
            Category: {campaign.category}
             </Card.Text> */}
          {/* <Button variant="primary" onClick={()=> navigate('/donate') }>Donate</Button> */}
          <Donate />
        </Card.Body>
      </Card>
    );
  };

  return (
    <Card1>
      <h4>
<<<<<<< HEAD
        <Badge pill bg='dark'>
          Wallet Balance:
        </Badge>
         <WalletBalance />
=======
        <Badge bg="dark">Wallet Balance:</Badge>
        <WalletBalance />
>>>>>>> 33cfce1353cf6ab07865479d3ae5bcb04e82d144
      </h4>

      <div
        style={{
          //  alignItems: "center"
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "30px ",
        }}
      >
        {renderCampaign()}
      </div>

      <br />
      <br />

      <h2>
<<<<<<< HEAD
       <Badge pill bg='dark'>
            Updates
        </Badge>
=======
        <Badge bg="dark">Updates</Badge>
>>>>>>> 33cfce1353cf6ab07865479d3ae5bcb04e82d144
      </h2>

      <div
        style={{
          //  alignItems: "center"
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "30px ",
        }}
      >
        {renderUpdates()}
      </div>

      <br />
      <br />

      <div
        style={{
          //  alignItems: "center"
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "30px ",
        }}
      >
        {renderDonations()}
      </div>
    </Card1>
  );
};
export default CampaignShow;
