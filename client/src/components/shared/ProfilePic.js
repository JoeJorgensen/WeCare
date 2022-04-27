import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ProfilePic from "./Images/DefaultProfile.png"


const DefaultProfilePic = () => {
  // need to grab User from AuthProvider
  const {user} = useContext(AuthContext);
  const renderImg = () => {
    if (user.image) {
      return user.image;
    }else
    return (
        <img src={ProfilePic} alt="profile" />
    );
  };

  return <div>{renderImg()}</div>;
};

export default DefaultProfilePic;