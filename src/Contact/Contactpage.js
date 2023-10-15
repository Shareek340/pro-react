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
          <div class="flex-work
          ">
            <div class="flex-works">
              <p class="header-work">L8D</p>
              <p class="brand-work">®</p>
            </div>
            <div class="navigation-work">
              <a href="#" class="navbar-work ">Home</a>
              <a href="#" class="navbar-work">Services</a>
              <a href="/next" class="navbar-work">Work</a>
              <a href="#" class="navbar-work">About</a>
              <a href="#" class="navbar-work">Blog</a>
              <a href="/contact" class="navbar-work">Contact</a>
            
            </div>
            <p class="contact-work">Let’s Talk</p>
          </div>
          <div class="work-section">
            <p class="work-title">Contact</p>
            <div class="image-container10">
              <img src={img2}/>
            
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contactpage;
