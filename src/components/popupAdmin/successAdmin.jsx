import React from "react";
import "./popupadmin.css";
import SuccessIng from "../../assets/icon-park_success.png";
import { NavLink } from "react-router-dom";
const SuccessAdmin = () => {
  return (
    <div className="success-admin">
      <div className="success-main">
        <div className="success-cont">
          <div className="p-img">
            <p>Successfully Added </p>
            <img src={SuccessIng} alt="" />
          </div>
          <NavLink to="/home">Return home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SuccessAdmin;
