import { useCallback, useState, forwardRef } from "react";
import TestimonialSection from "../TestimonialSection";
import "./style.css";
import img from './Vector.png';

function ImageSection1() {
  return (
    <div className={`apollo-website-design1 port-con`}>
      <div className={`image-container8 port-img`}>
        <img className={`logo-image img-content-b1c6ca8b`} src={img} />
      </div>
      <TestimonialSection />
    </div>
  );
}

export default ImageSection1;
