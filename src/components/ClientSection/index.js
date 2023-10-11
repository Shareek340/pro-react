import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ClientSection() {
  return (
    <div className={`flex-container`}>
      <p
        className={`max-width-609px-flex-grow-0-flex-shrink-0-flex-basis-auto-box-sizing-border-box-font-family-inter-font-size-100px-font-weight-500-letter-spacing-minus-0-03em-line-height-95-0422592163086-color-white`}
      >
        Clients We’ve
        <br />
        Worked With
      </p>
      
    </div>
  );
}

export default ClientSection;
