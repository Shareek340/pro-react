
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";

function SocialMediaLinks() {
  return (
    <div className={`social-media-icons-container1`}>
      <p className={`find-us`}>Find Us On</p>
      <div className={`social-media-icons-container`}>
        <div className={`svg-container12`}>
        </div>
        <div className={`text-container`}>
         <a href="#"> <p>           <SvgIcon1 className="svg-container5" />
Facebook</p></a>
          
          <a href="#"><p>           <SvgIcon2 className="svg-container6" />
Instagram</p></a>
          
        <a href="#">  <p>          <SvgIcon3 className="svg-container7" />
Youtube</p></a>
          
      <a href="#">    <p>          <SvgIcon4 className="svg-container8" />
LinkedIn</p></a>
          
         <a href="#"> <p>          <SvgIcon5 className="svg-container9" />
Twitter</p></a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
