import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ScheduleDiscoverySession() {
  return (
    <div className={`discovery-session-container1`}>
      <p className={`discovery-session-heading`}>Schedule A Free Discovery Session</p>
      <a href="#"><SvgIcon1 className="svg-container11" /></a>
    </div>
  );
}

export default ScheduleDiscoverySession;
