import React from "react";
import Img from "../../assets/Group 29.png";
import "./signup.css";
const SignUp = () => {
  // const formArray = [
  //   {
  //     for: "name",
  //     type: "text",
  //     id: "name",
  //     placeholder: "Name",
  //   },
  //   {
  //     for: "email",
  //     type: "email",
  //     id: "name",
  //     placeholder: "Name",
  //   },
  //   {
  //     for: "message",
  //     type: "text",
  //     id: "message",
  //     placeholder: "Name",
  //   },
  //   {
  //     for: "name",
  //     type: "text",
  //     id: "name",
  //     placeholder: "Name",
  //   },
  // ];
  return (
    <div className="sign">
      <div className="sign_up__cont">
        <div className="sign_up__img"></div>
        <div action="" className="sign_up__form">
          <span>Mchango_</span>
          <h1>Sign Up</h1>
          <form action="">
            <div className="form-group">
              <label for="name">Fullname:</label>
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                name="username"
                placeholder="Username"
              ></input>
            </div>
            <div className="form-group">
              <label for="country">Country</label>
              <input id="country" name="country" placeholder="Country" />
            </div>
            <div className="form-group">
              <label for="phone">Phone Number</label>
              <input id="phone" name="phone" placeholder="Phone Number"></input>
            </div>
            <div className="form-group">
              <label for="bvn">BVN Number</label>
              <input id="bvn" name="bvn" placeholder="BVN Number"></input>
            </div>
            <div className="form-img">
              <div>
                <img src={Img} alt="" />
                <p>Upload a valid means of identification</p>
              </div>
            </div>
          </form>
          <span className="sign_up">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
