import React from "react";
import "./popupadmin.css";
import Failed from "../../assets/failed.png";
import { NavLink } from "react-router-dom";
const FailedAdmin = () => {
  return (
    <div className="failed-admin">
      <div className="fail-main">
        <div className="fail-cont">
          <div className="p-img">
            <img src={Failed} alt="" />
            <p>
              You can not add any member because you are not an admin of this
              group.
            </p>
          </div>
          <NavLink to="/home">Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default FailedAdmin;
