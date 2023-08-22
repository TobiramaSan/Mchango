import React from "react";
import "./group.css";
import SideBar from "../../components/sidebar/sidebar";
import Search from "../../components/search/search";
import Table from "../../components/table/table";

const Group = () => {
  return (
    <div className="group">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="group-content">
        <Search />
        <Table />
      </div>
    </div>
  );
};

export default Group;
