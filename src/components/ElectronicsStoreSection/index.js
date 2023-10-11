import { useCallback, useState, forwardRef } from "react";
import FeaturedCaseStudySection from "../FeaturedCaseStudySection";
import CardLayout from "../CardLayout";
import img1 from './img1.png'

import "./style.css";

function ElectronicsStoreSection() {
  return (
    <div className={`featured-case-study-container`}>
      <div className={`featured-case-study4`}>
        <div className={`featured-case-study5`}>
          <FeaturedCaseStudySection />
          <p className={`featured-case-study-text`}>
            Elon is the Nordic region&apos;s largest retail chain for consumer electronics and home appliances, with over 400 stores in Sweden alone. Learn about their recent new online store launch
            on the Magento Commerce below.
          </p>
          <div className={`featured-case-study2`}>
            <p className={`case-study-link`}>View Case Study</p>
          </div>
        </div>
        <div className={`featured-case-study1`}>
          <img className={`hero-image img-content-d888a772`} src={img1} />
        </div>
      </div>
      <div className={`featured-case-study-section`}>
        <p className={`website-description`}>
          A Few Highlights of The
          <br />
          Projects We’ve Undertaken At Level8
        </p>
        <CardLayout />
      </div>
    </div>
  );
}

export default ElectronicsStoreSection;
