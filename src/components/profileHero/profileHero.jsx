import React from "react";
import "./profileHero.css";
import ArrorBack from "../../assets/arrow-back.png";
import ProfilePic from "../../assets/profile_pic.png";
import Pen from "../../assets/pen.png";
import People from "../../assets/people.png";
import Star from "../../assets/Star.png";
import Chat from "../../assets/chat.png";
import { useState } from "react";
import ToandFro from "../../assets/to_fro.png";
import OnlinePic from "../../assets/onlinPic.png";
import Colon from "../../assets/colon.png";

const ProfileHero = () => {
  const [isTabOpen, setIsTabOpen] = useState("Overview");

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
              <li
                onClick={() => {
                  setIsTabOpen("Overview");
                }}
              >
                Overview
              </li>
              <li
                onClick={() => {
                  setIsTabOpen("PaymentHistory");
                }}
              >
                Payment History
              </li>
              <li
                onClick={() => {
                  setIsTabOpen("Chatroom");
                }}
              >
                Chat Room
              </li>
            </ul>
            {isTabOpen === "Overview" ? (
              <div className="main-content">
                <h1>About DelwareSavers</h1>
                <p>
                  Welcome to DelwareSavers, a community of forward-thinking
                  individuals committed to improving our financial future
                  jointly through bitcoin savings and investment. Our goal is
                  straightforward: to pool our resources, contribute on a
                  regular basis, and watch our savings grow as we explore the
                  exciting world of cryptocurrencies. <br />
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
                      Share insights, strategies, and updates as we work
                      together towards our goals.
                    </li>
                  </ul>
                  Whether you're a seasoned crypto enthusiast or just getting
                  started, DelwareSavers provides a welcoming atmosphere for
                  financial research and education. Let us work together to
                  achieve a better financial future, one contribution at a time.
                  Join us today and be a part of the DelwareSavers adventure!.
                </p>
                <button>Message Admin to join Group.</button>
              </div>
            ) : isTabOpen === "PaymentHistory" ? (
              <div className="payment">
                <h1>Payment History</h1>
                <div className="payment-cont">
                  <img src={ToandFro} alt="" />
                  <div className="payment-main">
                    <div className="div-1">
                      <h1>Adenegan Adams</h1>
                      <span>14 Aug, 2023</span>
                    </div>
                    <div className="div-2">
                      <span>Week 3</span>
                      <h1>+$980</h1>
                    </div>
                  </div>
                </div>
                <div className="payment-cont">
                  <img src={ToandFro} alt="" />
                  <div className="payment-main">
                    <div className="div-1">
                      <h1>Adenegan Adams</h1>
                      <span>14 Aug, 2023</span>
                    </div>
                    <div className="div-2">
                      <span>Week 3</span>
                      <h1>+$980</h1>
                    </div>
                  </div>
                </div>
                <div className="payment-cont">
                  <img src={ToandFro} alt="" />
                  <div className="payment-main">
                    <div className="div-1">
                      <h1>Adenegan Adams</h1>
                      <span>14 Aug, 2023</span>
                    </div>
                    <div className="div-2">
                      <span>Week 3</span>
                      <h1>+$980</h1>
                    </div>
                  </div>
                </div>
                <div className="payment-cont">
                  <img src={ToandFro} alt="" />
                  <div className="payment-main">
                    <div className="div-1">
                      <h1>Adenegan Adams</h1>
                      <span>14 Aug, 2023</span>
                    </div>
                    <div className="div-2">
                      <span>Week 3</span>
                      <h1>+$980</h1>
                    </div>
                  </div>
                </div>
                <div className="payment-cont">
                  <img src={ToandFro} alt="" />
                  <div className="payment-main">
                    <div className="div-1">
                      <h1>Adenegan Adams</h1>
                      <span>14 Aug, 2023</span>
                    </div>
                    <div className="div-2">
                      <span>Week 3</span>
                      <h1>+$980</h1>
                    </div>
                  </div>
                </div>
                <button>Join Group.</button>
              </div>
            ) : isTabOpen === "Chatroom" ? (
              <div className="chatroom">
                <div className="chatroom-cont">
                  <div className="main-main">
                    <div className="title">
                      <div className="title-name-pic">
                        <img src={OnlinePic} alt="" />
                        <div className="title-name">
                          <h1>DelwareSavers</h1>
                          <h2>580 Members</h2>
                        </div>
                      </div>
                      <img src={Colon} alt="" />
                    </div>
                    <div className="line"></div>
                    <div className="chat-board">
                      <div className="chat-board-main">
                        <h1>Adeniji Johnson</h1>
                        <div className="inner-chat">
                          <h1>Please, when is the next contribution day</h1>
                        </div>
                        <span>Today, 2:01pm</span>
                      </div>
                      <div className="chat-board-main">
                        <h1>Adeniji Johnson</h1>
                        <div className="inner-chat">
                          <h1>Please, when is the next contribution day</h1>
                        </div>
                        <span>Today, 2:01pm</span>
                      </div>
                      <div className="chat-board-main">
                        <h1>Adeniji Johnson</h1>
                        <div className="inner-chat">
                          <h1>Please, when is the next contribution day</h1>
                        </div>
                        <span>Today, 2:01pm</span>
                      </div>
                      <div className="chat-board-main">
                        <h1>Adeniji Johnson</h1>
                        <div className="inner-chat">
                          <h1>Please, when is the next contribution day</h1>
                        </div>
                        <span>Today, 2:01pm</span>
                      </div>
                      <div className="chat-board-main">
                        <h1>Adeniji Johnson</h1>
                        <div className="inner-chat">
                          <h1>Please, when is the next contribution day</h1>
                        </div>
                        <span>Today, 2:01pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
