import React from "react";
import "./profile.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
import ProfileHero from "../../components/profileHero/profileHero";

const Profile = () => {
  return (
    <div className="main-profile">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="profile-content">
        <Search />
        <ProfileHero />
      </div>
    </div>
  );
};

export default Profile;
