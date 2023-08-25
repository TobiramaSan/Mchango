import React from "react";
import "./addMember.css";
import { NavLink } from "react-router-dom";

const AddMember = () => {
  return (
    <div className="add-member">
      <div className="add-member-main">
        <div className="add-member-cont">
          <div className="member-input">
            <label for="add">Enter user’s wallet address</label>
            <input type="text" name="add" placeholder="Add member address" />
          </div>
          <NavLink to="/home">Return home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
