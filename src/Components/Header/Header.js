import React from "react";
import "./header.css";

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
        <div className="bronze"></div>
        <div className="silver"></div>
        <div className="gold"></div>
      </div>
    </div>
  );
};

export default Header;
