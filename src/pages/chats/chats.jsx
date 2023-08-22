import React from "react";
import "./chats.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
import ChatHero from "../../components/chatHero/chatHero";

const Chats = () => {
  return (
    <div className="chats">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="chats-content">
        <Search />
        <ChatHero />
      </div>
    </div>
  );
};

export default Chats;
