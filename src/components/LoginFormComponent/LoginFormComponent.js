// import React from "react";
// import LoginButton from "../LoginButton/LoginButton";
// import "./LoginFormComponent.scss";

// //this is the component for the site logo
// const LoginFormComponent = () => {
// 	return (
// 		<div className="form">
// 			<input
// 				type="text"
// 				className="form__username"
// 				name="username"
// 				id="username"
// 				placeholder="Username"
// 			></input>
// 			<input
// 				type="text"
// 				className="form__password"
// 				name="password"
// 				id="password"
// 				placeholder="Password"
// 			></input>
// 			<LoginButton />
// 			<div>Create an account.</div>
// 		</div>
// 	);
// };

// export default LoginFormComponent;

import React from "react";
import AddGearComponent from "../AddGearComponent/AddGearComponent.js";
import "../AddGearComponent/AddGearComponent.scss";
import LogoutButton from "../LogoutButton/LogoutButton.js";
import "../LogoutButton/LogoutButton.scss";
import LoginButton from "../LoginButton/LoginButton.js";
import "../LoginButton/LoginButton.scss";

const LoginFormComponent = ({ isLoggedIn }) => {
	return (
		<form className="search-form">
			{isLoggedIn ? (
				<>
					<LogoutButton />
					<AddGearComponent />
				</>
			) : (
				<LoginButton />
			)}
		</form>
	);
};

export default LoginFormComponent;
