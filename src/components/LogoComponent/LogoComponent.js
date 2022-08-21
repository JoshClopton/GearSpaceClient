import React from "react";
import logoImage from "../../assets/logo/BunchofFives_WEB_BW_800x800px.png";
import "./LogoComponent.scss";
import { NavLink } from "react-router-dom";

const LogoComponent = () => {
	return (
		<div className="header__title-logo-container">
			<NavLink to="/" className="logo">
				<img
					className="logo__image"
					src={logoImage}
					alt="Bunch of Fives Logo"
				/>
			</NavLink>
			<h1 className="header__title">Gear Space</h1>
		</div>
	);
};

export default LogoComponent;
