import React from "react";
import logoImage from "../../assets/logo/BunchofFives_WEB_BW_800x800px.png";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="header__title-logo-container">
      <Link to="/" className="logo">
        <img
          className="logo__image"
          src={logoImage}
          alt="Bunch of Fives Logo"
        />
      </Link>
      <h1 className="header__title">Gear Space</h1>
    </div>
  );
};

export default Logo;
