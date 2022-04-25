import React from "react";
import facebook from "./Images/FacebookV2.png";
import instagram from "./Images/instagram.png";
import twitter from "./Images/Twitter.png";
import link from "./Images/link.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>WeCare</p>
      <p>© 2022 DevPoint Labs LLC All rights reserved</p>
      <div className="footerPngAlignment">
        <a href="https://www.Facebook.com">
          <img className="footerPNG" src={facebook}></img>
        </a>
        <a href="https://www.Instagram.com">
          <img className="footerPNG" src={instagram}></img>
        </a>
        <a href="https://www.Twitter.com">
          <img className="footerPNG" src={twitter}></img>
        </a>
        <a href="https://www.Linkedin.com">
          <img className="footerPNG" src={link}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
