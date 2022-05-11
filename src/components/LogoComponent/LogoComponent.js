import React from "react";
import logoImage from "../assets/logo/BunchofFives_WEB_BW_800x800px.png";
import "./LogoComponent.scss";

//this is the component for the site logo
const LogoComponent = () => {
	return (
		<div className="logo">
			<img className="logo__image" src={logoImage} alt="Bunch of Fives Logo" />
		</div>
	);
};

export default LogoComponent;
