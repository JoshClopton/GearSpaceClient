import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoComponent from "../LogoComponent/LogoComponent";
import "./Header.scss";

export const Header = (props) => {
	const { handleLoggedIn } = props;
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	console.log("🕵🏻‍♂️ handleLoggedIn: ", handleLoggedIn); //TODO: remove/comment
	console.log("🕵🏻‍♂️ typeOf: ", typeof handleLoggedIn); //TODO: remove/comment

	useEffect(() => {
		axios
			.get("http://localhost:8000/auth/profile", { withCredentials: true })
			.then((res) => {
				console.log("🕵🏻‍♂️ res: ", res); //TODO: remove/comment
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
				<input
					className="search-form__input"
					type="text"
					id="search"
					name="search"
					placeholder="Search by category"
				/>

				{isLoggedIn ? (
					<>
						{" "}
						<a
							className="header__login-link header__login-link--active"
							href="http://localhost:8000/auth/logout"
						>
							Log Out
						</a>
						<NavLink to={"/search"} className="header__login-link">
							Add Shelf
						</NavLink>
					</>
				) : (
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
