import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function SectionWithNumbers() {
  return (
    <div className={`digital-level8-container`}>
      <div className={`flex-end-container`}>
        <p className={`large-heading1`}>01</p>
        <p className={`large-heading1`}>02</p>
        <p className={`large-heading1`}>03</p>
        <p className={`large-heading1`}>04</p>
        <p className={`large-heading1`}>05</p>
        <p className={`large-heading1`}>06</p>
        <p className={`large-heading1`}>07</p>
        <p className={`large-text`}>Level8Digital</p>
      </div>
      
    </div>
  );
}

export default SectionWithNumbers;