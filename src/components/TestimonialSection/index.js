import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function TestimonialSection() {
  return (
    <div className={`testimonial-container`}>
      
      <p className={`testimonial-text`}>
        “When looking for someone to do a good job in a tight time frame, it can prove difficult or expensive. I was very happy with the work done by Creative Brand Design, I had to have a website up
        and running before the start of my season and they were able to get it done with time to spare.”
      </p>
      <div className={`testimonial-divider`} />
      <div className={`branding-services-for-john-doe`}>
        <p className={`branding-services-title`}>Branding Services For</p>
        <p className={`ceo-name`}>John Doe - CEO </p>
      </div>
    </div>
  );
}

export default TestimonialSection;
