
import HomeLayout from "../HomeLayout";
import DigitalCommerceSuccess from "../DigitalCommerceSuccess";
import DesignGuide from "../DesignGuide";
import "./style.css";

function HomePage() {
  return (
    <div className={`digital-commerce-section`}>
      <HomeLayout />
      <div className={`level8-digital-container`}>
        <p className={`level8-digital`}>Level8Digital</p>
        <p className={`level8-digital-text`}>®</p>
      </div>
      <div className={`digital-commerce-section2`}>
        <DigitalCommerceSuccess />
        <DesignGuide />
      </div>
    </div>
  );
}

export default HomePage;
