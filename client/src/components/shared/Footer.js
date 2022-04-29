import React from "react";
import facebook from "./Images/BlueFacebook.png"
import twitter from "./Images/BlueTwitter.png"
import behance from "./Images/BlueBehance.png"
import insta from "./Images/BlueInstagram.png"
import google from "./Images/BlueGoogle+.png"

const Footer = () => {
  return (
    
    <div className="footer">
      <div>
      <p>WeCare</p>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <div>
      <p>© 2022 DevPoint Labs LLC All rights reserved</p>
      </div>
      <div>
        <a href="https://www.Facebook.com">
          <img style={{width: "20px", height: "20px", margin: "8px"}} className="footerPNG" src={facebook}></img>
        </a>
        <a href="https://www.Instagram.com">
          <img style={{width: "20px", height: "20px", margin: "8px"}} className="footerPNG" src={insta}></img>
        </a>
        <a href="https://www.Twitter.com">
          <img style={{width: "23px", height: "20px", margin: "8px"}} className="footerPNG" src={twitter}></img>
        </a>
        <a href="https://www.google.com/drive/">
          <img style={{width: "27px", height: "20px", margin: "8px"}} className="footerPNG" src={google}></img>
        </a>
        <a href="https://www.behance.net">
          <img style={{width: "28px", height: "20px", margin: "8px"}} className="footerPNG" src={behance}></img>
        </a>
        </div>
        </div>
    </div>

  );
};

export default Footer;
