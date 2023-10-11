import { useCallback, useState, forwardRef } from "react";

import "./style.css";

function GoodSolutions() {
  return (
    <div className={`retail-chain-info`}>
      <div className={`yellow-border-box`} />
      <div className={`retail-chain-info2`}>
        <p className={`max-width-box-sizing-font-family-font-size-font-weight-letter-spacing-line-height-color`}>
          We Believe In The
          <br />
          Simplicity Of Good Solutions
        </p>
      </div>
      <div className={`retail-chain-description`}>
        <p className={`retail-description`}>
          Elon is the Nordic region&apos;s largest retail chain for consumer electronics and home appliances, with over 400 stores in Sweden alone. Learn about their recent new online store launch on
          the Magento Commerce below.
        </p>
      </div>
      <div className={`services-container`}>
        <p className={`services-title`}>View All Our Services</p>
        
      </div>
    </div>
  );
}

export default GoodSolutions;
