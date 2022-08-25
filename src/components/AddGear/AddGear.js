import React from "react";
import "./AddGear.scss";
import { NavLink } from "react-router-dom";

function AddGearComponent() {
  return (
    <div className="header__login-link-add">
      <NavLink to={"/search"} className="header__login-link-active">
        Add Gear
      </NavLink>
    </div>
  );
}

export default AddGearComponent;
