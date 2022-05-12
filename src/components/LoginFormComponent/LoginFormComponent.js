import React from "react";
import LoginButtonComponent from "../LoginButtonComponent/LoginButtonComponent";
import "./LoginFormComponent.scss";

//this is the component for the site logo
const LoginFormComponent = () => {
	return (
		<div className="form">
			<input
				type="text"
				className="form__username"
				name="username"
				id="username"
				placeholder="Username"
			></input>
			<input
				type="text"
				className="form__password"
				name="password"
				id="password"
				placeholder="Password"
			></input>
			<LoginButtonComponent />
		</div>
	);
};

export default LoginFormComponent;
