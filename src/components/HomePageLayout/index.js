
import DiscoverSection from "../DiscoverSection";
import SocialMediaLinks from "../SocialMediaLinks";
import "./style.css";

function HomePageLayout() {
  return (
    <div className={`discover-section`}>
      <DiscoverSection />
      <SocialMediaLinks />
    </div>
  );
}

export default HomePageLayout;
