import React from "react";
import "./create.css";
import Search from "../../components/search/search";
import SideBar from "../../components/sidebar/sidebar";
import CreateForm from "../../components/create-form/createForm";
const CreateGroup = () => {
  return (
    <div className="create-group">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="create-content">
        <Search />
        <CreateForm />
      </div>
    </div>
  );
};

export default CreateGroup;
