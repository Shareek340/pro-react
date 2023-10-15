
import AmbitiousCompanies from "../AmbitiousCompanies";
import ScheduleSession from "../ScheduleSession";
import "./style.css";

function HomeLayout() {
  return (
    <div className={`main-container2`}>
      <div className={`header-container3`}>
        <div className={`header-container1`}>
          <p className={`golden-text2`}>
            <span>L8</span>
            <span className={`golden-text1`}>D</span>
          </p>
          <p className={`golden-text`}>®</p>
        </div>
        <div className={`navigation-menu`}>
          <a href="#"  className={`navigation-link`}>Home</a>
          <a href="#" className={`navigation-link`}>Services</a>
          <a href="/next" className={`navigation-link`}>Work</a>
          <a href="#" className={`navigation-link`}>About</a>
          <a href="#" className={`navigation-link`}>Blog</a>
          <a href="/contact" className={`navigation-link`}>Contact</a>
        </div>
      </div>
      <div className={`discovery-section`}>
        <AmbitiousCompanies />
        <ScheduleSession />
      </div>
    </div>
  );
}

export default HomeLayout;
