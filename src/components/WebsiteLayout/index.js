import { useCallback, useState, forwardRef } from "react";
import GoodSolutions from "../GoodSolutions";
import BrandingSection from "../BrandingSection";
import DevelopmentSection from "../DevelopmentSection";
import "./style.css";

function WebsiteLayout() {
  return (
    <div className={`retail-section`}>
      <GoodSolutions />
      <div className={`retail-section1`}>
        <BrandingSection />
      </div>
      <div className={`retail-chain-info1`}>
        <DevelopmentSection />
      </div>
    </div>
  );
}

export default WebsiteLayout;
