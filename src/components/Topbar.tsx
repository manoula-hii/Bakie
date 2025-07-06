import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import "./Topbar.css";

const  Topbar = () => {
    return (
         <div className="topbar-container">
      <div className="topbar-content">
        <div className="topbar-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
        </div>

        <div className="topbar-socials">
          <div className="topbar-media">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Topbar;
