import { useCallback, useState, forwardRef } from "react";
import DigitalAgency from "../DigitalAgency";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function EqualityAdvocate() {
  return (
    <div className={`omnichannel-agency1`}>
      <div className={`omnichannel-agency-container`}>
        <p className={`main-heading`}>
          We believe in an even <br />
          playing field for all.
        </p>
        <DigitalAgency />
      </div>
      <div className={`discovery-session-container dis-ses-con`}>
        <p className={`discovery-session-heading3 hed-equ`}>Browse Our Entire Collection of Articles</p>
        <SvgIcon1 className="svg-container3" />
      </div>
      <div className={`golden-border dis-line`} />
    </div>
  );
}

export default EqualityAdvocate;
