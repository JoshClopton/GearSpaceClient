import React from "react";
import logoImage from "../assets/logo/BunchofFives_WEB_BW_800x800px.jpg";
// import "../components/LogoComponent.scss";
import LogoComponent from "../components/LogoComponent/LogoComponent";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";
import "./HomePage.scss";
import LoginButtonComponent from "../components/LoginButtonComponent/LoginButtonComponent";

const HomePage = () => {
	return (
		<div className="home-page">
			{/* <LogoComponent />
			<h1>GearSpace</h1>
			<LoginFormComponent /> */}
			<LoginButtonComponent />
		</div>
	);
};

export default HomePage;
