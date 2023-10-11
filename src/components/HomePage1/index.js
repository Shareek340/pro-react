
import HomePageLayout from "../HomePageLayout";
import NewsletterSection from "../NewsletterSection";
import TechnologiesSection from "../TechnologiesSection";
import "./style.css";

function HomePage1() {
  return (
    <div className={`container-section`}>
      <div className={`brand-testimonial-section`}>
        <HomePageLayout />
        <NewsletterSection />
      </div>
      <TechnologiesSection />
    </div>
  );
}

export default HomePage1;
