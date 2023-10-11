import { useCallback, useState, forwardRef } from "react";
import WebsiteCard from "../WebsiteCard";
import MarketingCard from "../MarketingCard";
import BrandCard from "../BrandCard";
import GarageBranding from "../GarageBranding";
import "./style.css";

function CardLayout() {
  return (
    <div className={`project-card`}>
      <WebsiteCard />
      <MarketingCard />
      <BrandCard />
      <GarageBranding />
    </div>
  );
}

export default CardLayout;
