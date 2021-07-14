import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to="/upload">
            <div className="upload" />
          </Link>
          <img
            className="personal"
            alt="Your_Image"
            src="https://i.kym-cdn.com/photos/images/original/001/996/641/bc2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
