import React from "react";
import "./createForm.css";
import Img from "../../assets/Group 29.png";
import Arrowback from "../../assets/arrow-back.png";
import { useNavigate } from "react-router-dom";
const CreateForm = () => {
  const navigate = useNavigate();
  return (
    <div className="create-form">
      <div className="arrow-text">
        <img src={Arrowback} alt="" />
        <p>To create a new thrift group, kindly fill out these details. </p>
      </div>
      <form action="">
        <div className="form-group">
          <label for="name">Thrift Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>

        <div className="form-group">
          <label for="purpose">Group’s goal/purpose</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            placeholder="Purpose"
          />
        </div>

        <div className="form-group">
          <label for="premium">Contribution Premium</label>
          <input id="premium" name="premium" placeholder="Premium plan"></input>
        </div>
        <div className="form-group">
          <label for="time">Plan Frequency</label>
          <input
            id="time"
            name="time"
            placeholder="Choose the time frame for contribution"
          />
        </div>
        <div className="form-img">
          <div>
            <img src={Img} alt="" />
            <p>Upload a valid means of identification</p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="sign_up"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
