import React from "react";
import "./header.css";
import tabletop from "./tabletop.jpg";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="title">Studio North</div>
        <div className="nav">
          <ul>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="tabletopcontainer">
          <div className="tabletopcard">
            <img className="tabletopimg" src={tabletop} alt="tabletop" />
          </div>
        </div>
        <div className="paradecontainer"></div>
        <div className="showcasecontainer"></div>
      </div>
    </div>
  );
};

export default Header;
