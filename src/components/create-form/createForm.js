import React, { useState } from "react";
import "./createForm.css";
import Img from "../../assets/Group 29.png";
import Arrowback from "../../assets/arrow-back.png";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigation = useNavigate();

  const [thriftName, setThriftName] = useState("");
  const [groupPurpose, setGroupPurpose] = useState("");
  const [contributionPremium, setContributionPremium] = useState("");
  const [planFrequency, setPlanFrequency] = useState("");

  const handleCreateGroup = (e) => {
    e.preventDefault();

    console.log("Thrift Name:", thriftName);
    console.log("Group Purpose:", groupPurpose);
    console.log("Contribution Premium:", contributionPremium);
    console.log("Plan Frequency:", planFrequency);
  };

  return (
    <div className="create-form">
      <div className="arrow-text">
        <img
          onClick={() => {
            navigation("/group");
          }}
          src={Arrowback}
          alt=""
        />
        <p>To create a new thrift group, kindly fill out these details. </p>
      </div>
      <form onSubmit={handleCreateGroup}>
        <div className="form-group">
          <label htmlFor="name">Thrift Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={thriftName}
            onChange={(e) => setThriftName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Group’s goal/purpose</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            placeholder="Purpose"
            value={groupPurpose}
            onChange={(e) => setGroupPurpose(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="premium">Contribution Premium</label>
          <select
            id="premium"
            name="premium"
            placeholder="premium plan"
            value={contributionPremium}
            onChange={(e) => setContributionPremium(e.target.value)}
          >
            <option value="2eth">2k ETH </option>
            <option value="2.5eth">2.5k ETH </option>
            <option value="3eth">3k ETH </option>
            <option value="4eth">4k ETH</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="frequency">Plan Frequency</label>
          <select
            id="frequency"
            name="frequency"
            placeholder="Choose the time frame for contribution"
            value={planFrequency}
            onChange={(e) => setPlanFrequency(e.target.value)}
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
        <button className="sign_up" type="submit">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
