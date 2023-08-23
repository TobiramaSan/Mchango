import React from "react";
import "./overview.css";
import ArrorBack from "../../assets/arrow-back.png";
import ProfilePic from "../../assets/profile_pic.png";
import Pen from "../../assets/pen.png";
import People from "../../assets/people.png";
import Star from "../../assets/Star.png";
import Chat from "../../assets/chat.png";
const Overview = () => {
  return (
    <div className="overview-details">
      <div className="overview-details-cont">
        <div className="arrow-cont">
          <img src={ArrorBack} alt="" />
        </div>
        <div className="profile-pic">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="about-details">
          <div className="title-cont">
            <h1>About DelwareSavers</h1>
            <div>
              <ul>
                <li>
                  <img src={People} alt="" />
                  <p>100 members</p>
                </li>
                <li>
                  <img src={Star} alt="" />
                  <p>4.9(280)</p>
                </li>
                <li>
                  <img src={Chat} alt="" />
                  <p>Total Contribution: $234,098.00</p>
                </li>
                <li>
                  <img src={Pen} alt="" />
                  <p>Created 12 months ago.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-content">
            <p>
              Welcome to DelwareSavers, a community of forward-thinking
              individuals committed to improving our financial future jointly
              through bitcoin savings and investment. Our goal is
              straightforward: to pool our resources, contribute on a regular
              basis, and watch our savings grow as we explore the exciting world
              of cryptocurrencies.
            </p>
          </div>
        </div>
        <div className="plan-pay">
          <div className="plan">
            <h1>Contribution Plan</h1>
            <div>
              <h3>Amount per user: $500</h3>
              <h3>Frequency: Monthly</h3>
            </div>
          </div>
          <div className="pay">
            <h1>Payment Disbursement Schedule</h1>
            <div>
              <h3>Next Disbursement: August 15, 2023 </h3>
              <h3>
                Upcoming Disbursements: September 15, 2023; October 15, 2023
              </h3>
            </div>
          </div>
        </div>
        <div className="group-button">
          <h1>Group Settings(Admins Only)</h1>
          <div className="two-btns">
            <button>Manage Members</button>
            <button>Adjust Contribution Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
