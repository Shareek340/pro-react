import ScheduleDiscoverySession from "../ScheduleDiscoverySession";
import img1 from './sf.png';
import img2 from './php.png';
import img3 from './react.png';
import img4 from './box.png'
import img5 from './viu.png'
import img6 from './u.png'
import img7 from './word.png'
import img8 from './woo.png'
import img9 from './js.png'
import "./style.css";

function TechnologiesSection() {
  return (
    <div className={`technology-section`}>
      <p className={`technology-title`}>Technologies We Use</p>
      <div className={`technology-section1`}>
        <div className={`image-container6`}>
          <div className={`image-container11`}>
            <img className={`image-container10 img-content-65f81910`} src={img1} />
          </div>
          <div className={`image-container11`}>
            <img className={`image-container14 img-content-812dc236`} src={img2} />
          </div>
          <div className={`image-container11`}>
            <img className={`image-container15 img-content-386b9a19`} src={img3} />
          </div>
          <div className={`image-container11`}>
            <img className={`image-container13 img-content-14438e85`} src={img4} />
          </div>
          <div className={`image-container11`}>
            <img className={`image-container15 img-content-8a63fe67`} src={img5} />
          </div>
          <div className={`image-container11`}>
            <img className={`image-container12 img-content-139fdf34`} src={img6} />
          </div>
                  
        
        <div className={`discovery-session-container2`}>
          <img className={`image-container2 img-content-8af1c6b5`} src={img8} />
        </div>
        <div className={`discovery-session-container2`}>
          <img className={`image-container2 img-content-8af1c6b5`} src={img9} />
        </div>
        </div>
        <div className={`discovery-session1`}>
          <ScheduleDiscoverySession />
        </div>
      </div>
    </div>
  );
}

export default TechnologiesSection;
