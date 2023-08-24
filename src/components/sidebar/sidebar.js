import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";
import Home from "../../assets/Home_Home.png";
import Groups from "../../assets/Home_Group.png";
import Chat from "../../assets/Home_Chat.png";
import Profile from "../../assets/Home_Profile.jpg";
import Logout from "../../assets/Home_logout.png";
import Ugrade from "../../assets/upgrade.png";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="side_bar">
      <div className="side_bar__wrapper">
        <div className="logo_name">
          <img src={Logo} alt="" />
          <h1>Mchango_</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">
              <img src={Home} alt="" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/group">
              <img src={Groups} alt="" />
              <span> Groups</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chats">
              <img src={Chat} alt="" />
              <span>Chat</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <img src={Profile} alt="" />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/upgrade">
              <img src={Ugrade} alt="" />
              <span>Upgrade</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="log_out">
        <NavLink>
          <img src={Logout} alt="" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
