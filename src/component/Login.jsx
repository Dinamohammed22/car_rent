import React, { Component } from "react";

import { NavLink } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-box">
          <div className="login-logo">
            <img
              src={require("./images/WhatsApp_Image_2023-08-29_at_2.43.54_PM-removebg-preview.png")}
              className="imge-profile"
              alt="jhj"
            />
            <h2 className="logo-word-login">بنان لتأجير السيارات</h2>
          </div>
          <h1>تسجيل الدخول</h1>
          <div className="one">
            <h3>الايميل</h3>
            <input
              type={"email"}
              id="email"
              className="email-input"
              name="email"
            />
          </div>
          <div className="one">
            <h3>الرقم السري</h3>
            <input
              type={"password"}
              id="password"
              className="pass-input"
              name="password"
            />
          </div>
          <button
            // onClick={(e) => {
            //   e.preventDefault();
            //   return login();
            // }}
            className="login-btn"
          >
            تسجيل الدخول
          </button>
          <NavLink
            to="/Register"
            style={({ isActive }) => ({
              color: isActive ? "#462a1c" : "#ded5d0",
              fontSize: "20px",
            })}
          >
            sign up
          </NavLink>
        </div>
      </div>
    );
  }
}
