import React from "react";
import "./groupDetails.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
import Overview from "../../components/overview/overview";

const GroupDetails = () => {
  return (
    <div className="group-info">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="group-info-content">
        <Search />
        <Overview />
      </div>
    </div>
  );
};

export default GroupDetails;
