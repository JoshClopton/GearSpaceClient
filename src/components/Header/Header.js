import axios from "axios";
import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import LoginForm from "../LoginForm/LoginForm";

export const Header = (props) => {
  const { handleLoggedIn } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/profile", { withCredentials: true })
      .then((res) => {
        res.data.google_id ? setIsLoggedIn(true) : setIsLoggedIn(false);
        res.data.google_id && handleLoggedIn();
      });
  }, []);

  return (
    <div className="header">
      <Logo />
      <LoginForm isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Header;
