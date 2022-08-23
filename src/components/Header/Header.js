import axios from "axios";
import React, { useEffect } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import LoginForm from "../LoginForm/LoginForm";

const Header = ({ handleLoggedIn, handleLoggedOut, isLoggedIn }) => {
	// //On page load, a get request is sent to the back end to check if the session has been authenticated. If so, set logged in to true in home page. Otherwise, set logged in to false.
	useEffect(() => {
		axios
			.get("http://localhost:8000/auth/profile", { withCredentials: true })
			.then((res) => {
				res.data.google_id ? handleLoggedIn() : handleLoggedOut();
			});
	});

	return (
		<div className="header">
			<Logo />
			<LoginForm isLoggedIn={isLoggedIn} />
		</div>
	);
};

export default Header;
