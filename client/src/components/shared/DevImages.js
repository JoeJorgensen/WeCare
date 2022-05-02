import React, { useEffect, useState } from "react";
import behance from "./Images/BlueBehance.png";
import insta from "./Images/instagram.png";
import github from "./Images/githubimg.png";
import twitter from "./Images/BlueTwitter.png";
import facebook from "./Images/facebook.png";
import linkedin from "./Images/Linkedin.png";
import twitch from "./Images/twitch.png";
import youtube from "./Images/youtube.png";

function DevImages(props) {
  return (
    <div className="imagescontainer">
      <div className="card card0">
        <div className="border1">
          <h3>Joe Jorgensen</h3>
          <div className="icons">
            <a href="">
              <img src={insta} className="fa fa-instagram" width="20px" />
            </a>
            <a href="">
              <img src={github} className="fa fa-github" width="20px" />
            </a>
            <a href="">
              <img src={twitter} className="fa fa-twitter" width="20px" />
            </a>
            <a href="">
              <img src={facebook} className="fa fa-facebook" width="20px" />
            </a>
            <a href="">
              <img src={linkedin} className="fa fa-linkedin" width="20px" />
            </a>
          </div>
        </div>
      </div>
      <div className="card card1">
        <div className="border1">
          <h3>Steven Crass</h3>
          <div className="icons">
            <a href="https://www.instagram.com/stevecrass/">
              <img src={insta} className="fa fa-instagram" width="20px" />
            </a>
            <a href="https://github.com/TheSteveIsGreat">
              <img src={github} className="fa fa-github" width="20px" />
            </a>
            <a href="https://twitter.com/TheSteveIsGreat">
              <img src={twitter} className="fa fa-twitter" width="20px" />
            </a>
            <a href="https://www.facebook.com/steven.crass">
              <img src={facebook} className="fa fa-facebook" width="20px" />
            </a>
            <a href="https://www.linkedin.com/in/stevecrass/">
              <img src={linkedin} className="fa fa-linkedin" width="20px" />
            </a>
          </div>
        </div>
      </div>
      <div className="card card2">
        <div className="border1">
          <h3>Randy Clements</h3>
          <div className="icons">
            <a href="https://www.instagram.com/rcxlv_/">
              <img src={insta} className="fa fa-instagram" width="20px" />
            </a>
            <a href="https://github.com/Randycl808">
              <img src={github} className="fa fa-github" width="20px" />
            </a>
            <a href="">
              <img src={twitter} className="fa fa-twitter" width="20px" />
            </a>
            <a href="">
              <img src={facebook} className="fa fa-facebook" width="20px" />
            </a>
            <a href="https://www.linkedin.com/in/randyclements/">
              <img src={linkedin} className="fa fa-linkedin" width="20px" />
            </a>
          </div>
        </div>
      </div>
      <div className="card card3">
        <div className="border1">
          <h3>Austin Kilgore</h3>
          <div className="icons">
            <a href="https://www.instagram.com/mr_kilgore_gaming/">
              <img src={insta} className="fa fa-instagram" width="20px" />
            </a>
            <a href="https://github.com/MrKilgore94">
              <img src={github} className="fa fa-github" width="20px" />
            </a>
            <a href="https://www.linkedin.com/in/austinskilgore/">
              <img src={linkedin} className="fa fa-linkedin" width="20px" />
            </a>
            <a href="https://www.twitch.tv/mr_kilgore_gaming">
              <img src={twitch} className="fa fa-twitch" width="20px" />
            </a>
            <a href="https://www.youtube.com/channel/UCqr--mhPzgywG7FwIadN2zQ">
              <img src={youtube} className="fa fa-youtube" width="20px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevImages;
