import React from "react";
import "./OverPayChat.css";
import SideBar from "../../../components/sidebar/sidebar";
import Search from "../../../components/search/search";
import ProfileHero from "../../../components/profileHero/profileHero";

const GroupInfo = () => {
  return (
    <div className="groupInfo">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="groupInfo-content">
        <Search />
        <ProfileHero />
      </div>
    </div>
  );
};

export default GroupInfo;
