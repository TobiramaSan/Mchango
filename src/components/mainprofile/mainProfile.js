import React, { useState } from "react";
import "./mainProfile.css";
import Activity1 from "../../assets/Activity1.png";
import Activity2 from "../../assets/Activity2.png";
// import camera from "../../assets/Camera.png";

const MainProfile = () => {
  const [isTabOpen, setIsTabOpen] = useState("profileInformation");
  return (
    <div className="main-profile">
      <div className="main-profile-cont">
        <ul>
          <li
            onClick={() => {
              setIsTabOpen("profileInformation");
            }}
          >
            Profile Information
          </li>
          <li
            onClick={() => {
              setIsTabOpen("ActivityOverview");
            }}
          >
            Activity Overview
          </li>
          <li
            onClick={() => {
              setIsTabOpen("SecuritySettings");
            }}
          >
            Security Settings
          </li>
        </ul>
        {isTabOpen === "profileInformation" ? (
          <div className="profile-information">
            <div className="profile-info-cont">
              <div className="photo">
                <div className="img-div">
                  {/* <img src={camera} alt="" /> */}
                </div>
                <p>The uploaded image must be 500px wide and 500px long</p>
              </div>

              <form className="profile-form" action="">
                <div className="form-div">
                  <label For="name">Name</label>
                  <input type="text" placeholder="name" name="name" />
                </div>
                <div className="form-div">
                  <label For="email">Email</label>
                  <input
                    type="email"
                    placeholder="Ramonridwan@gogeafrica.com"
                    name="email"
                  />
                </div>
                <div className="form-div">
                  <label For="phone">Name</label>
                  <input
                    type="number"
                    placeholder="+234 8123456679"
                    name="phone"
                  />
                </div>
                <button>Save</button>
              </form>
            </div>
          </div>
        ) : isTabOpen === "ActivityOverview" ? (
          <div className="activity">
            <div className="activity-cont">
              <div className="single-cont">
                <img src={Activity1} alt="" />
              </div>
              <div className="single-cont">
                <img src={Activity2} alt="" />
              </div>
              <div className="single-cont">
                <img src={Activity1} alt="" />
              </div>
            </div>
          </div>
        ) : isTabOpen === "SecuritySettings" ? (
          <div className="security">
            <div className="security-cont">
              <div className="mail-pass">
                <div className="mail">
                  <p>Sign-in Email</p> <span>johnsmith@gmail.com</span>
                </div>
                <div className="pass">
                  <p>Password</p> <button>Change Password</button>
                </div>
              </div>
              <div className="auth-phone">
                <div className="auth">
                  <p>2-FA autentification</p>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
                <div className="phone">
                  <p>Phone number</p>
                  <span>+380 93 123 45 67</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainProfile;
