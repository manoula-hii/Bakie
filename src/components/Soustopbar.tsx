import "./Soustopbar.css";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import leftImage from '../assets/images/decoration.png';
import rightImage from '../assets/images/decorationr.png';

const Soustopbar = () => {
  return (
    <div className="sous-container">
      <div className="header-top">
       
        <div className="left-section">
          <div className="searchbar">
            <FaSearch className="searchbar-icon" />
            <input
              type="text"
              className="searchbar-input"
              placeholder="A type of sweet ?"
            />
          </div>
        </div>

       
        <div className="center-section">
          <div className="title-wrapper">
            <img src={leftImage} alt="left deco" className="side-image" />
            <h2 className="title">Bakie</h2>
            <img src={rightImage} alt="right deco" className="side-image" />
          </div>
        </div>

        <div className="right-section">
          <a href="#account" title="Account">
            <FaUser />
          </a>
          <a href="#favorites" title="Favorites">
            <FaHeart />
          </a>
        </div>
      </div>

    
      <div className="header-bottom">
        <a href="#culturalinsight">Cultural Insights</a>
        <a href="#map">Map of desserts</a>
        <a href="#recipes">Recipes</a>
        <a href="#spotlight">Weekly Spotlights</a>
      </div>
    </div>
  );
};

export default Soustopbar;