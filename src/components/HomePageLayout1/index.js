import { useCallback, useState, forwardRef } from "react";
import HomePage from "../HomePage";
import ImageSection from "../ImageSection";
import ElectronicsStoreSection from "../ElectronicsStoreSection";
import WebsiteLayout from "../WebsiteLayout";
import CompanyPortfolio from "../CompanyPortfolio";
import SectionWithNumbers from "../SectionWithNumbers";
import EqualityAdvocate from "../EqualityAdvocate";
import WebsiteContent3 from "../WebsiteContent3";
import WebsiteContent1 from "../WebsiteContent1";
import WebsiteContent2 from "../WebsiteContent2";
import WebsiteContent from "../WebsiteContent";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import img1 from './img.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import "./style.css";

function HomePageLayout1() {
  return (
    <div className={`digital-commerce-section1`}>
      <div className={`digital-commerce-section3`}>
        <HomePage />
        <ImageSection />
      </div>
      <ElectronicsStoreSection />
      <WebsiteLayout />
      <CompanyPortfolio />
      <SectionWithNumbers />
      <EqualityAdvocate />
      <div className={`website-work-section`}>
        <div className={`digital-experience-card2`}>
          <img className={`website-work-image1 img-content-9a5530a4`} src={img1} />
          <WebsiteContent3 />
          <div className={`discovery-session2`}>
            <p className={`discovery-session-heading2`}>Schedule A Free Discovery Session</p>
            <a href="#"><SvgIcon1 className="svg-container4" /></a>
          </div>
        </div>
        <div className={`sidebar`} />
        <div className={`digital-experience-card2`}>
          <img className={`website-work-image2 img-content-abd16de9`} src={img2} />
          <WebsiteContent1 />
          <div className={`discovery-session2`}>
            <p className={`discovery-session-heading2`}>Schedule A Free Discovery Session</p>
            <a href="#"><SvgIcon2 className="svg-container4" /></a>
          </div>
        </div>
        <div className={`sidebar`} />
        <div className={`digital-experience-card2`}>
          <img className={`website-work-image img-content-d5d92f85`} src={img3} />
          <WebsiteContent2 />
          <div className={`discovery-session`}>
            <p className={`discovery-session-heading2`}>Schedule A Free Discovery Session</p>
            <a href="#"><SvgIcon3 className="svg-container4" /></a>
          </div>
        </div>
        <div className={`sidebar`} />
        <div className={`digital-experience-card2`}>
          <img className={`website-work-image2 img-content-2cf9c4ac`} src={img4} />
          <WebsiteContent />
          <div className={`discovery-session-container4`}>
            <p className={`discovery-session-heading2`}>Schedule A Free Discovery Session</p>
            <a href="#"><SvgIcon4 className="svg-container4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageLayout1;
