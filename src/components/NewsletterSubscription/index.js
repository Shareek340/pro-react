import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function NewsletterSubscription() {
  return (
    <div className={`flex-container1`}>
      <p className={`design-trends-text`}>Interested in keeping up-to-date about the latest in design trends in Manchester, England? We’ve got you covered.</p>
      {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className={`design-trends-container`}>
        <input placeholder="Enter Email Address Here" type="text" className={`input-container input-style-f62::placeholder`} />
       <a href="#"> <SvgIcon1 className="svg-container10" /></a>
      </div>
    </div>
  );
}

export default NewsletterSubscription;
