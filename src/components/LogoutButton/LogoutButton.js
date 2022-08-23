import React from "react";
import "./LogoutButton.scss";
//ToDo: Update SERVER_URL
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LogoutButton = () => {
  return (
    <a
      className="header__login-link header__login-link--active"
      href="http://localhost:8000/auth/logout"
    >
      Log Out
    </a>
  );
};

export default LogoutButton;
