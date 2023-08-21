import React from "react";
import Notify from "../../assets/Notification.png";
import Star from "../../assets/Star 15.png";
import "./search.css";
const Search = () => {
  return (
    <div className="search">
      <div className="search_input">
        <input type="text" id="search" name="search" placeholder="Search" />
      </div>
      <div className="notify_profile">
        <div className="notify">
          <img src={Notify} alt="" />
        </div>
        <div className="profile">
          <img src={Star} alt="" />
          <h3>Isabella</h3>
        </div>
      </div>
    </div>
  );
};

export default Search;
