import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="left-navbar">
          <img
            src={require("./images/WhatsApp_Image_2023-08-29_at_2.43.54_PM-removebg-preview.png")}
            className="imge-profile"
            alt="jhj"
          />
          {/* <h3 className="logo-word">بنان</h3> */}
        </div>
        <div className="right-navbar">
          <NavLink to="/">الصفحة الرئيسية</NavLink>
          <NavLink to="/Contactus">تواصل معنا</NavLink>
          <NavLink to="/Cars">السيارات</NavLink>
          <NavLink to="/Login">تسجيل الدخول</NavLink>
        </div>
      </div>
    );
  }
}
