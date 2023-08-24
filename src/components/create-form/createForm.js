import React from "react";
import "./createForm.css";
import Img from "../../assets/Group 29.png";
import Arrowback from "../../assets/arrow-back.png";
// import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Success from "../success/success";
import { useState } from "react";
const CreateForm = () => {
  // const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowSuccess(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setShowSuccess(false);
  };
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
          <select id="premium" name="premium" placeholder="premium plan">
            <option value="2eth">2k ETH </option>
            <option value="2.5eth">2.5k ETH </option>
            <option value="3eth ">3k ETH </option>
            <option value="4eth">4k ETH</option>
          </select>
        </div>
        <div className="form-group">
          <label for="frequency">Plan Frequency</label>
          <select
            id="frequncy"
            name="frequency"
            placeholder="Choose the time frame for contribution"
          >
            <option value="monthly"> Monthly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <div className="form-img">
          <div>
            <img src={Img} alt="" />
            <p>Upload a valid means of identification</p>
          </div>
        </div>
        <button onClick={openModal} className="sign_up">
          Create Group
        </button>
      </form>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Success"
        onRequestClose={closeModal}
      >
        {showSuccess && <Success />}
      </ReactModal>
    </div>
  );
};

export default CreateForm;
