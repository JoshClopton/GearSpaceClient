import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.scss";

export const Header = ({ handleLoggedIn }) => {
	//If user is logged in display a link to log out or to add gear
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	//On page load a get request is sent to the back end to check if the session has been authenticated. If so, set logged in to true in the header component and also set it in the home page. Otherwise, set logged in to false.
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
			<div className="header__title-logo-container">
				<LogoComponent />
				<h1 className="header__title">Gear Space</h1>
			</div>
			<form className="search-form">
				{isLoggedIn ? (
					<>
						<a
							className="header__login-link header__login-link--active"
							href="http://localhost:8000/auth/logout"
						>
							Log Out
						</a>
						<div className="header__login-link-add">
							<NavLink to={"/search"} className="header__login-link-active">
								Add Gear
							</NavLink>
						</div>
					</>
				) : (
					//If user clicks the login link then send a request for authentication to google
					<a
						className="header__login-link header__login-link--active"
						href="http://localhost:8000/auth/google"
					>
						Log In
					</a>
				)}
			</form>
		</div>
	);
};
