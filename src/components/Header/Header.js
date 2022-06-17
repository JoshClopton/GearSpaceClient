import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.scss";
import { API_URL } from "../../config/index";

export const Header = (props) => {
	const { handleLoggedIn } = props;
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		axios
			.get(`${API_URL}/auth/profile`, { withCredentials: true })
			.then((res) => {
				res.data.google_id ? setIsLoggedIn(true) : setIsLoggedIn(false);
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
						{" "}
						<a
							className="header__login-link header__login-link--active"
							href={`${API_URL}/auth/logout`}
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
					<a
						className="header__login-link header__login-link--active"
						href={`${API_URL}/auth/google`}
					>
						Log In
					</a>
				)}
			</form>
		</div>
	);
};
