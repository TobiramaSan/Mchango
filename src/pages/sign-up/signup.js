import React, { useState } from "react";
import Img from "../../assets/Group 29.png";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/mchango logo 1.png";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bvnNumber, setBvnNumber] = useState("");

  return (
    <div className="sign">
      <div className="sign_up__cont">
        <div className="sign_up__img"></div>
        <div action="" className="sign_up__form">
          <div className="bg">
            {" "}
            <img src={logo} alt="" />
          </div>
          <h1>Sign Up</h1>
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Fullname:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bvn">BVN Number</label>
              <input
                id="bvn"
                name="bvn"
                placeholder="BVN Number"
                value={bvnNumber}
                onChange={(e) => setBvnNumber(e.target.value)}
              />
            </div>
            <div className="form-img">
              <div>
                <img src={Img} alt="" />
                <p>Upload a valid means of identification</p>
              </div>
            </div>
          </form>
          <span
            onClick={() => {
              console.log("Fullname:", fullname);
              console.log("Email:", email);
              console.log("Username:", username);
              console.log("Country:", country);
              console.log("Phone Number:", phoneNumber);
              console.log("BVN Number:", bvnNumber);

              navigate("/connect-wallet");
            }}
            className="sign_up"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
