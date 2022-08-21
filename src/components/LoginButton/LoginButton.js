// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./LoginButton.scss";
// import LoginButton

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// //this is the component for the site logo
// export const LoginButton = () => {
// 	return (
// 		// <button
// 		// 	onClick={() => {
// 		// 		axios
// 		// 			.get(`http://localhost:8000/auth/auth/google`, {
// 		// 				// withCredentials: true,
// 		// 			})
// 		// 			.then((res) => {
// 		// 				console.log("🕵🏻‍♂️ res: ", res); //TODO: remove/comment

// 		// 				// Update the state: done authenticating, user is logged in, set the profile data
// 		// 			});
// 		// 	}}
// 		// 	className="login-button"
// 		// >
// 		// 	Log In
// 		// </button>
// 		<a className="login-button" href={`${SERVER_URL}/auth/google`}></a>
// 	);
// };

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
