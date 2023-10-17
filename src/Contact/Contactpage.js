import React from "react";
import HomeLayout from "../components/HomeLayout";
import img1 from '../assets/img.png'
import MainLayout from "../components/MainLayout";
import img2 from '../assets/arrow.png'

function Contactpage() {
  return (
    <div>
      <div>
        <div class="hero-section1">
        {/* <img class="image-container img-content-b60e4b02" src={img1} /> */}
        <div className={`header-container3 work-hero`}>
        <div className={`header-container1 work-head`}>
          <p className={`golden-text2 gold-white`}>
            <span>L8</span>
            <span className={`golden-text1 gold-white`}>D</span>
          </p>
          <p className={`golden-text gold-white`}>®</p>
        </div>
        <div className={`navigation-menu work-menu`}>
          <a href="#"  className={`navigation-link`}>Home</a>
          <a href="#" className={`navigation-link`}>Services</a>
          <a href="/next" className={`navigation-link`}>Work</a>
          <a href="#" className={`navigation-link`}>About</a>
          <a href="#" className={`navigation-link`}>Blog</a>
          <a href="/contact" className={`navigation-link`}>Contact</a>
          <a className="talk">Let's Talk</a>
        </div>
      </div>
          <div class="work-section">
            <p class="work-title">Contact</p>
            <div class="image-container10 img-work">
              <img src={img2}/>
            
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contactpage;
