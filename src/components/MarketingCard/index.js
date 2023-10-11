import { useCallback, useState, forwardRef } from "react";
import "./style.css";
import img2 from './img2.png';

function MarketingCard() {
  return (
    <div className={`apollo-website-design1`}>
      <img className={`marketing-campaign-image img-content-343f8a85`} src={img2} />
      <div className={`apollo-website-design3`}>
        <p className={`apollo-website-design`}>Cenita Marketing Campaign</p>
        <p className={`apollo-website-design-text`}>Marketing</p>
      </div>
    </div>
  );
}

export default MarketingCard;
