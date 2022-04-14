import axios from "axios";
import Card from '../../providers/Card'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CampaignShow = () => {
  const params = useParams()
  const [campaign, setCampaign] = useState([])
  const [updates, setUpdates] = useState([])

  useEffect(() => {
    getCampaign()
    getUpdates()
  }, [])

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
        <Card>
          <p>Updates: {u.comment}</p>
          <p> {u.image}</p>
        </Card>
      )
    })
  }

  const renderCampaign = () => {
    return (
      <Card>
        <p>Name: {campaign.name}</p>
        <img src={campaign.img} />
        {!campaign.image && <p>no image</p>}
        <p>Description: {campaign.description}</p>
        <p>Current Amount: ${campaign.current_amount}</p>
        <p>Goal: ${campaign.goal}</p>
        <p>Expiration: {campaign.expiration}</p>
      </Card>
    );
  }

  return (
    <div>
      {renderCampaign()}
      {renderUpdates()}
    </div>
  )

};
export default CampaignShow;
