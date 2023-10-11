import { useCallback, useState, forwardRef } from "react";
import HomePageLayout1 from "../HomePageLayout1";
import MainLayout from "../MainLayout";
import "./style.css";

function AppLayout() {
  return (
    <div className={`main-container`}>
      <HomePageLayout1 />
      <MainLayout />
    </div>
  );
}

export default AppLayout;
