
import { DateTime } from "luxon";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DonationCardShow from "./Styling/DonationCardShow";


const DonationPagination = ({donations, loading}) => {

const navigate = useNavigate()
 if(loading){
    return   <Spinner animation="border" variant="denim" />

 }
 return<div className="list-group mb-4">
     {donations.map((c) => (
          <DonationCardShow
            onClickImg={() => navigate(`/profile_show/${c.user_id}`)}
            onClick={() => navigate(`/campaign_show/${c.campaign_id}`)}
            key={c.id}
            hexa={"#1DB95F"}
            title={c.name}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.image}
          />
         
        ))}
 </div>
return (
    <div>

    </div>
)
  
  
};

export default DonationPagination;
