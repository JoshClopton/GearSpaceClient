import React from "react";
import logoImage from "../../assets/logo/BunchofFives_WEB_BW_800x800px.png";
import "./LogoComponent.scss";
import { NavLink } from "react-router-dom";

//this is the component for the site logo
const LogoComponent = () => {
	return (
		<NavLink to="/" className="logo">
			<img className="logo__image" src={logoImage} alt="Bunch of Fives Logo" />
		</NavLink>
	);
};

export default LogoComponent;
