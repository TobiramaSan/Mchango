import React from "react";
import "./upgradeHero.css";
import Basic from "../../assets/Basic.png";
import Premium from "../../assets/Premium.png";
import Exclusive from "../../assets/Exclusive.png";

const UpgradeHero = () => {
  return (
    <div className="upgrade-hero">
      <div className="upgrade-hero-cont">
        <div className="upgrade-main">
          <div className="upgrade-image">
            <img src={Basic} alt="" />
          </div>
          <div className="upgrade-text">
            <div className="upgrade-text-title">
              <h1>Basic Plan</h1>
              <p>
                The Basic Plan is ideal for users new to collective savings.
                Start your journey towards financial goals with group savings
                power.
              </p>
            </div>
            <div className="upgrade-price">
              <p>Commission Fee: 3%</p>
              <p>No of subscriibers: 10 max</p>
              <p>Subscription Payment: 0 ETH</p>
            </div>
          </div>
        </div>
        <div className="upgrade-main">
          <div className="upgrade-image">
            <img src={Premium} alt="" />
          </div>
          <div className="upgrade-text">
            <div className="upgrade-text-title">
              <h1>Premium Plan</h1>
              <p>
                Elevate savings with the Premium Plan's advanced features and
                exclusive benefits, designed for accelerated financial success.
              </p>
            </div>
            <div className="upgrade-price">
              <p>Commission Fee: 1.5%</p>
              <p>No of subscriibers: 30 max</p>
              <p>Subscription Payment: 0.05 ETH</p>
            </div>
          </div>
        </div>
        <div className="upgrade-main">
          <div className="upgrade-image">
            <img src={Exclusive} alt="" />
          </div>
          <div className="upgrade-text">
            <div className="upgrade-text-title">
              <h1>Exclusive Plan</h1>
              <p>
                Start with the Basic Plan for an entry into collective savings.
                Begin your journey to financial goals and benefit from group
                savings power.
              </p>
            </div>
            <div className="upgrade-price">
              <p>Commission Fee: 1%</p>
              <p>No of subscriibers: 50 max</p>
              <p>Subscription Payment: 0.1 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeHero;
