import React from "react";
import AddGear from "../AddGear/AddGear.js";
import "../AddGear/AddGear.scss";
import LogoutButton from "../LogoutButton/LogoutButton.js";
import "../LogoutButton/LogoutButton.scss";
import LoginButton from "../LoginButton/LoginButton.js";
import "../LoginButton/LoginButton.scss";

const LoginForm = ({ isLoggedIn }) => {
  return (
    <div className="search-form">
      {isLoggedIn ? (
        <>
          <LogoutButton />
          <AddGear />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default LoginForm;
