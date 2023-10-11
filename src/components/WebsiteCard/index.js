import { useCallback, useState, forwardRef } from "react";
import "./style.css";
import img1 from './img1.png'

function WebsiteCard() {
  return (
    <div className={`apollo-website-design1`}>
      <img className={`apollo-website-design2 img-content-568608c3`} src={img1}/>
      <div className={`apollo-website-design3`}>
        <p className={`apollo-website-design`}>Apollo Website Design</p>
        <p className={`apollo-website-design-text`}>Website Work</p>
      </div>
    </div>
  );
}

export default WebsiteCard;
