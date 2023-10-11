
import "./style.css";

function DiscoverSection() {
  return (
    <div className={`flex-container1`}>
      <p className={`discover-heading`}>Discover</p>
      <div className={`discover-container`}>
        <div className={`narrow-text-container`}>
          <a href='#'>Work</a> <br />
          <a href='#'>Services</a> <br />
          <a href='#'>About</a>         <br />
         <a href='#'> Blog Archive</a>
          <br />
          <a href ='#'>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
