import React from "react";
import HomeLayout from "../components/HomeLayout";
import './workpage.css';
import img1 from '../assets/img.png'
import MainLayout from "../components/MainLayout";
import img2 from '../assets/arrow.png'

function WorkPage() {
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
              <p class="navbar-work">Home</p>
              <p class="navbar-work">Services</p>
              <p class="navbar-work">Work</p>
              <p class="navbar-work">About</p>
              <p class="navbar-work">Blog</p>
              <p class="navbar-work">Contact</p>
            </div>
            <p class="contact-work">Let’s Talk</p>
          </div>
          <div class="work-section">
            <p class="work-title">Work</p>
            <div class="image-container10">
              <img src={img2}/>
            
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default WorkPage;
