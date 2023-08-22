import React from "react";
import "./success.css";
import SuccessIng from "../../assets/icon-park_success.png";
import { NavLink } from "react-router-dom";
const Success = () => {
  return (
    <div className="success">
      <div className="success-main">
        <div className="success-cont">
          <div className="p-img">
            <p>You have successfully created this group. </p>
            <img src={SuccessIng} alt="" />
          </div>
          <NavLink to="/home">Return home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Success;
