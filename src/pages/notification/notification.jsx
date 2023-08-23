import React from "react";
import "./notification.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
import Notify from "../../components/notify/notify";

const Notification = () => {
  return (
    <div className="notification">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="notification-content">
        <Search />
        <Notify />
      </div>
    </div>
  );
};

export default Notification;
