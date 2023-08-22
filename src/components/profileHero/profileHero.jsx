import React from "react";
import "./profileHero.css";
import ArrorBack from "../../assets/arrow-back.png";
import ProfilePic from "../../assets/profile_pic.png";
import Pen from "../../assets/pen.png";
import People from "../../assets/people.png";
import Star from "../../assets/Star.png";
import Chat from "../../assets/chat.png";

const ProfileHero = () => {
  return (
    <div className="profile-hero">
      <div className="profile-hero-cont">
        <div className="arrow-cont">
          <img src={ArrorBack} alt="" />
        </div>
        <div className="profile-pic">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="text-cont">
          <div className="title-cont">
            <h1>DelwareSavers</h1>
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
          <div className="links-main-content">
            <ul className="links">
              <li>Overview</li>
              <li>Payment History</li>
              <li>Chat Room</li>
            </ul>
            <div className="main-content">
              <h1>About DelwareSavers</h1>
              <p>
                Welcome to DelwareSavers, a community of forward-thinking
                individuals committed to improving our financial future jointly
                through bitcoin savings and investment. Our goal is
                straightforward: to pool our resources, contribute on a regular
                basis, and watch our savings grow as we explore the exciting
                world of cryptocurrencies. <br />
                <br /> <br />
                Why Should You Join DelwareSavers?
                <ul className="inner-list">
                  <li>
                    Collaborate with like-minded individuals to achieve
                    financial growth.
                  </li>
                  <li>
                    Leverage the power of group contributions to access new
                    investment opportunities.
                  </li>
                  <li>
                    Enjoy a disciplined and consistent approach to saving and
                    investing in the crypto space.
                  </li>
                  <li>
                    Share insights, strategies, and updates as we work together
                    towards our goals.
                  </li>
                </ul>
                Whether you're a seasoned crypto enthusiast or just getting
                started, DelwareSavers provides a welcoming atmosphere for
                financial research and education. Let us work together to
                achieve a better financial future, one contribution at a time.
                Join us today and be a part of the DelwareSavers adventure!.
              </p>
            </div>
          </div>
        </div>
        <button>Message Admin to join Group.</button>
      </div>
    </div>
  );
};

export default ProfileHero;
