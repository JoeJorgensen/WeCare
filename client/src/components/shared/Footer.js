import React from "react";
import facebook from "./Images/BlueFacebook.png"
import twitter from "./Images/BlueTwitter.png"
import behance from "./Images/BlueBehance.png"
import insta from "./Images/BlueInstagram.png"
import google from "./Images/BlueGoogle+.png"

const Footer = () => {
  return (
    <div className="footer">
      <p>WeCare</p>
      <p>© 2022 DevPoint Labs LLC All rights reserved</p>
      <div className="footerPngAlignment">
        <a href="https://www.Facebook.com">
          <img style={{justifyContent: "space-between", width: "20px", height: "20px"}} className="footerPNG" src={facebook}></img>
        </a>
        <a href="https://www.Instagram.com">
          <img style={{width: "20px", height: "20px"}} className="footerPNG" src={insta}></img>
        </a>
        <a href="https://www.Twitter.com">
          <img style={{width: "20px", height: "20px"}} className="footerPNG" src={twitter}></img>
        </a>
        <a href="https://www.Linkedin.com">
          <img style={{width: "25px", height: "20px"}} className="footerPNG" src={google}></img>
        </a>
        <a href="https://www.behance.net">
          <img style={{width: "25px", height: "20px"}} className="footerPNG" src={behance}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
