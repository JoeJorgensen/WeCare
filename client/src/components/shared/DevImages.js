import React, { useEffect, useState } from "react";
import behance from "./Images/BlueBehance.png"


function DevImages(props) {
  return(

<div className="imagescontainer">
  <div className="card card0">
    <div className="border1">
      <h2>Joe Jorgensen</h2>
      <div className="icons">
        <a className="fa fa-codepen" image-url="https://logodix.com/logo/14591.jpg" aria-hidden="false" href="" ></a>
        <i className="fa fa-instagram" image={behance} aria-hidden="false" href="" ></i>
        <i className="fa fa-dribbble" src="https://logodix.com/logo/14591.jpg" aria-hidden="false" href="" ></i>
        <i className="fa fa-twitter" image="https://logodix.com/logo/14591.jpg" aria-hidden="false" href="" ></i>
        <i className="fa fa-facebook" url="https://logodix.com/logo/14591.jpg" aria-hidden="false" href="" ></i>
      </div>
    </div>
  </div>
  <div className="card card1">
    <div className="border1">
      <h2>Steven Crass</h2>
      <div className="icons">
        <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div className="card card2">
    <div className="border1">
      <h2>Randy Clements</h2>
      <div className="icons">
        <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div className="card card3">
    <div className="border1">
      <h2>Austin Kilgore</h2>
      <div className="icons">
        <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>
  )}

export default DevImages;