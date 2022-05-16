import axios from "axios";
import React from "react";
import "./LoginButtonComponent.scss";

//this is the component for the site logo
const LoginButtonComponent = () => {
	return (
		// <button
		// 	onClick={() => {
		// 		axios
		// 			.get(`http://localhost:8000/auth/auth/google`, {
		// 				// withCredentials: true,
		// 			})
		// 			.then((res) => {
		// 				console.log("🕵🏻‍♂️ res: ", res); //TODO: remove/comment

		// 				// Update the state: done authenticating, user is logged in, set the profile data
		// 			});
		// 	}}
		// 	className="login-button"
		// >
		// 	Log In
		// </button>
		<a className="login-button" href={"http://localhost:8000/auth/google"}>
			link
		</a>
	);
};

export default LoginButtonComponent;
