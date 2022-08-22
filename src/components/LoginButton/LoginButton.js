import React from "react";
import "./LoginButton.scss";

const LoginButton = () => {
	return (
		<a
			className="header__login-link header__login-link--active"
			href="http://localhost:8000/auth/google"
		>
			Log In
		</a>
	);
};

export default LoginButton;
