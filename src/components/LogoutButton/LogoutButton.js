import React from "react";
import "./LogoutButton.scss";

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
