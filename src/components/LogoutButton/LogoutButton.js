import React from "react";
import "./LogoutButton.scss";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const LogoutButton = () => {
	return <a className="logout-button" href={`${SERVER_URL}/auth/logout`}></a>;
};
