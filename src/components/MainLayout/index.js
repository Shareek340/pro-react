import { useCallback, useState, forwardRef } from "react";
import HomePage1 from "../HomePage1";
import FooterComponent from "../FooterComponent";
import "./style.css";

function MainLayout() {
  return (
    <div className={`main-container1`}>
      <HomePage1 />
      <FooterComponent />
    </div>
  );
}

export default MainLayout;
