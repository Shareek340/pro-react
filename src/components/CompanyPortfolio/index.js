import { useCallback, useState, forwardRef } from "react";
import ClientSection from "../ClientSection";
import ImageSection1 from "../ImageSection1";
import HeroSection2 from "../HeroSection2";
import HeroSection1 from "../HeroSection1";
import HeroSection from "../HeroSection";
import img1 from './Subtract.png'
import img2 from './Subtract2.png'
import "./style.css";

function CompanyPortfolio() {
  return (
    <div className={`brand-design-container`}>
      <div className={`brand-testimonial-section`}>
        <ClientSection />
        <div className={`career-section`}>
          <p className={`company-experience-text`}>Over our 8 year career we’ve worked withover 50 companies</p>
          <div className={`company-list`}>
            <img className={`image-container1 img-content-59486fc8`} src={img1} />
            <img className={`image-container1 img-content-59486fc8`} src={img2} />
          </div>
        </div>
      </div>
      <div className={`testimonial-section`}>
        <ImageSection1 />
        <HeroSection2 />
        <HeroSection1 />
        <HeroSection />
      </div>
    </div>
  );
}

export default CompanyPortfolio;
