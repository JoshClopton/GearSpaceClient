import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoComponent from "../LogoComponent/LogoComponent";
// import LoginButtonComponent from "../components/LoginButtonComponent/LoginButtonComponent";
import "./Header.scss";

export const Header = () => {
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
				<a
					className="header__login-link"
					activeClassName="header__login-link--active"
					href={"http://localhost:8000/auth/google"}
				>
					Sign In
				</a>
			</form>
		</div>
	);
};
