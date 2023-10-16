import React from "react";
import HomeLayout from "../components/HomeLayout";
import "./workpage.css";
import img1 from "../assets/img.png";
import MainLayout from "../components/MainLayout";
import img2 from "../assets/arrow.png";

function WorkPage() {
  return (
    <div>
      <div>
        <div class="hero-section1">
         
          <div class="flex-work"> 
            <div class="flex-works">
              <p class="header-work">L8D</p>
              <p class="brand-work">®</p>
            </div>
            <div class="navigation-work">
              <a href="#" className={`navigation-link navbar-work`}>
                Home
              </a>
              <a href="#" className={`navigation-link navbar-work`}>
                Services
              </a>
              <a href="/next" className={`navigation-link navbar-work`}>
                Work
              </a>
              <a href="#" className={`navigation-link navbar-work`}>
                About
              </a>
              <a href="#" className={`navigation-link navbar-work`}>
                Blog
              </a>
              <a href="/contact" className={`navigation-link navbar-work`}>
                Contact
              </a>
            </div>
            <p class="contact-work">Let’s Talk</p>
          </div>
          <div class="work-section">
            <p class="work-title">Work</p>
            <div class="image-container10">
              <img src={img2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
