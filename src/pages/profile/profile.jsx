import React from "react";
import "./profile.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
// import ProfileHero from "../../components/profileHero/profileHero";
import MainProfile from "../../components/mainprofile/mainProfile";

const Profile = () => {
  return (
    <div className="main-profile">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="profile-content">
        <Search />
        {/* <ProfileHero /> */}
        <MainProfile />
      </div>
    </div>
  );
};

export default Profile;
