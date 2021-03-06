
import { DateTime } from "luxon";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DonationCardShow from "./Styling/DonationCardShow";
import ProfilePic from './shared/Images/DefaultProfile.png'


const DonationPagination = ({donations, loading}) => {

const navigate = useNavigate()
 if(loading){
    return   <Spinner animation="border" variant="denim" />

 }
 return <div  className="list-group mb-4">
     {donations.map((c) => (
          <DonationCardShow
            onClickImg={c.anonymous ? null : () => navigate(`/profile_show/${c.user_id}`)}
            key={c.id}
            hexa={"#1DB95F"}
            title={c.anonymous ? 'anonymous' : c.name}
            date={DateTime.fromISO(c.created_at).toFormat("DD")}
            current_amount={c.amount}
            description={c.comment}
            image={c.anonymous ? ProfilePic : c.image}
          />
         
        ))}
 </div>

  
  
};

export default DonationPagination;
