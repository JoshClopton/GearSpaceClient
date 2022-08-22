import axios from "axios";
import React, { useState, useEffect } from "react";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.scss";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";
import AddGearComponent from "../AddGear/AddGear.js";
import LoginFormComponent from "../LoginFormComponent/LoginFormComponent";

export const Header = ({ handleLoggedIn }) => {
	//If user is logged in display a link to log out or to add gear
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	//On page load, a get request is sent to the back end to check if the session has been authenticated. If so, set logged in to true in the header component and also set it in the home page. Otherwise, set logged in to false.
	useEffect(() => {
		axios
			.get("http://localhost:8000/auth/profile", { withCredentials: true })
			.then((res) => {
				res.data.google_id ? setIsLoggedIn(true) : setIsLoggedIn(false);
				//ToDo: figure out the error in the console here

				res.data.google_id && handleLoggedIn();
			});
	}, []);

	return (
		<div className="header">
			<LogoComponent />
			<LoginFormComponent isLoggedIn={isLoggedIn} />
		</div>
	);
};
