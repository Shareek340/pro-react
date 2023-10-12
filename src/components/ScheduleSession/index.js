import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ScheduleSession() {
  return (
    <div className={`discovery-session-container3`}>
      <div className={`discovery-session-container`}>
        <p className={`discovery-session-heading7`}>Schedule A Free Discovery Session</p>
        <a href="#"><SvgIcon1 className="svg-container" /></a>
      </div>
      <div className={`discovery-session-divider`} />
    </div>
  );
}

export default ScheduleSession;
