import React from "react";
// import { NavLink } from "react-router-dom";
import "./landing.css";
import arrow from "../../assets/arrow_right_alt.png";
import logo from "../../assets/mchango logo 1.png";

const Landing = () => {
  return (
    <div className="landing__pg">
      <div className="landing_pg__cont">
        <div className="landing_pg__img"></div>
        <div className="landing_pg__text">
          <div className="main__text">
            <div className="bg">
              <img src={logo} alt="" />
            </div>
            <h2>Gateway to Smart Savings and Contributions</h2>
            <p>
              Join a host of forward-thinking group and start on a path of
              mutual financial progress. Create or join groups with ease,
              establish contribution objectives, and watch your money grow using
              smart contracts.
              <br /> <br />
              <span className="sm">
                Initiate saving, active participation, and fostering growth.
              </span>
            </p>
          </div>

          <ul>
            <li className="sign_up__btn">
              <a href="/signup">Sign Up</a>
            </li>
            <li className="contact__btn">
              <a href="/">Connect Your Wallet</a>
              <img src={arrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
