import React from "react";
import "./workd.css";
import img1 from '../assets/pro4.png'
import img2 from '../assets/pro5.png'
import img3 from '../assets/Subtract.png'

function WorkD() {
  return (
    <div className="work-D">
      <div className="work1">
        <div className="w-text">
          <p className={`project-WorkS works1`}>Website Work</p>
          <h3 className={`branding-work1`}>Apollo Website Design </h3>

          <p className={`digital-work-text workds`}>
            Level 8 Digital is a leading full-service omnichannel agency
            building digital experiences for clients across the globe. Our goal
            is to accelerate sales for our B2B and B2C clients by delivering
            award-winning digital storefronts, solutions and mobile apps.
          </p>

          <p className={`case-work-title1`}>View Case Study<img src={img3}/></p>
          
        </div>
        <div className="w-image">
            <img src={img1}/>
        </div>
      </div>
      <div className="work1">
        <div className="w-text">
          <p className={`project-WorkS works1`}>Website Work</p>
          <h3 className={`branding-work1`}>Apollo Website Design </h3>

          <p className={`digital-work-text workds`}>
            Level 8 Digital is a leading full-service omnichannel agency
            building digital experiences for clients across the globe. Our goal
            is to accelerate sales for our B2B and B2C clients by delivering
            award-winning digital storefronts, solutions and mobile apps.
          </p>

          <p className={`case-work-title1`}>View Case Study<img src={img3}/></p>
         
        </div>
        <div className="w-image">
            <img src={img2}/>
        </div>
      </div>
    </div>
  );
}

export default WorkD;
