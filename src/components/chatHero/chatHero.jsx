import React, { useState } from "react";
import "./chatHero.css";
import Pic1 from "../../assets/pic1.png";
import Pic2 from "../../assets/pic2.png";
import Pic3 from "../../assets/pic3.png";
import Pic4 from "../../assets/pic4.png";
import Pic5 from "../../assets/pic5.png";
import Addmembers from "../../assets/addmember.png";
import People from "../../assets/people.png";
import { NavLink } from "react-router-dom";

const ChatHero = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="chat-hero">
        <div className="chat-hero-cont">
          <div className="group-chats">
            <div className="group-personal">
              <h1>Group Chats</h1>
              <h1>Personal Chats</h1>
            </div>
            <div className="group-cubes">
              <div className="cube">
                <div className="inner-cube">
                  <div className="group-title">
                    <h2>DelwareSavers</h2>
                    <p>Created 12 months ago.</p>
                  </div>
                  <div className="detail1">
                    <img src={People} alt="" />
                    <p>120 members</p>
                  </div>
                  <div className="detail2">
                    <img src={People} alt="" />
                    <p>Total Contribution: $145,098.00</p>
                  </div>
                </div>
              </div>
              <div className="cube">
                <div className="inner-cube">
                  <div className="group-title">
                    <h2>Philanthropy Circle</h2>
                    <p>Created 6 months ago.</p>
                  </div>
                  <div className="detail1">
                    <img src={People} alt="" />
                    <p>238 members</p>
                  </div>
                  <div className="detail2">
                    <img src={People} alt="" />
                    <p>Total Contribution: $510,900.00</p>
                  </div>
                </div>
              </div>
              <div className="cube">
                <div className="inner-cube">
                  <div className="group-title">
                    <h2>Creative Ventures</h2>
                    <p>Created 8 months ago.</p>
                  </div>
                  <div className="detail1">
                    <img src={People} alt="" />
                    <p>340 members</p>
                  </div>
                  <div className="detail2">
                    <img src={People} alt="" />
                    <p>Total Contribution: $100,208.00</p>
                  </div>
                </div>
              </div>
              <div className="cube">
                <div className="inner-cube">
                  <div className="group-title">
                    <h2>Green Thumb Gardeners</h2>
                    <p>Created 5 months ago.</p>
                  </div>
                  <div className="detail1">
                    <img src={People} alt="" />
                    <p>100 members</p>
                  </div>
                  <div className="detail2">
                    <img src={People} alt="" />
                    <p>Total Contribution: $234,098.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-chat"></div>
          <div className="main-group-chat">
            <div className="group-head">
              <div className="name-heading">
                <h2>DelwareSavers</h2>
                <p>567 members</p>
              </div>
              <div className="add-details">
                {modal && <Addmembers />}
                <img onClick={toggleModal} src={Addmembers} alt="" />
                <NavLink to="/group-details">
                  <span>Group details</span>
                </NavLink>
              </div>
            </div>
            <div className="header-date">
              <h3>May 27, 2022</h3>
            </div>
            <div className="inner-texts">
              <div className="main-inner-text">
                <img src={Pic1} alt="" />
                <div className="message">
                  <div className="message-name">
                    <h1>Adexel</h1>
                    <span>10:54 PM</span>
                  </div>
                  <div className="message-content">
                    <p>
                      Good morning, Wealth Builders! Just a quick update: I've
                      hit 40% of my savings goal for a new investment
                      opportunity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-inner-text">
                <img src={Pic2} alt="" />
                <div className="message">
                  <div className="message-name">
                    <h1>Peter</h1>
                    <span>10:56 PM</span>
                  </div>
                  <div className="message-content">
                    <p>
                      Your progress is inspiring. I'm at 25% of my goal for a
                      down payment on a rental property.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-inner-text">
                <img src={Pic3} alt="" />
                <div className="message">
                  <div className="message-name">
                    <h1>Deserat</h1>
                    <span>10:59 PM</span>
                  </div>
                  <div className="message-content">
                    <p>
                      Slow and steady progress on my end. 15% saved for my
                      emergency fund. Every bit counts, right?
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-inner-text">
                <img src={Pic4} alt="" />
                <div className="message">
                  <div className="message-name">
                    <h1>Susan</h1>
                    <span>11:02 PM</span>
                  </div>
                  <div className="message-content">
                    <p>
                      Hi all, joining in! I just started, but I'm excited. My
                      goal is to save for further education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-inner-text">
                <img src={Pic5} alt="" />
                <div className="message">
                  <div className="message-name">
                    <h1>CryptKing</h1>
                    <span>11:05 PM</span>
                  </div>
                  <div className="message-content">
                    <p>
                      Sharing our progress and goals keeps us motivated. Thanks
                      for sharing, everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <input type="text" name="chat" placeholder="Type a message" />
          </div>
        </div>
      </div>
      <div className="add-member">
        <div className="add-member-main">
          <div className="add-member-cont">
            <div className="member-input">
              <label for="add">Enter user’s wallet address</label>
              <input type="text" name="add" placeholder="Add member address" />
            </div>
            <NavLink onClick={toggleModal}>Return home</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHero;
