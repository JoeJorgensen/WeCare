import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const MyCampaigns = () => {
  const params = useParams()
  const [updates, setUpdates] = useState([])
  const [image, setImage] = useState('')
  const [comment, setComment] = useState('')

  useEffect(()=> {
    getCampaignUpdates()
  }, [])

  const getCampaignUpdates = async() => {
    try {
      let res = await axios.get(`/api/user_campaign_updates`)
      setUpdates(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  // to create an update, i need campaign_id, comment, img

  
  return (
    <>
    <h1>My Campaigns</h1>
    <p>{JSON.stringify(updates)}</p>
    </>
  )
}

export default MyCampaigns