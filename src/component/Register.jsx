import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="register-box">
          <div className="register-logo">
            <img
              src={require("./images/WhatsApp_Image_2023-08-29_at_2.43.54_PM-removebg-preview.png")}
              className="imge-profile"
              alt="jhj"
            />
            <h2 className="logo-word-login">بنان لتأجير السيارات</h2>
          </div>
          <h1>تسجيل جديد</h1>
          <div className="one">
            <h3>الاسم</h3>
            <input type={"name"} id="name" className="name-input" name="name" />
          </div>
          <div className="one">
            <h3>رقم الهاتف</h3>
            <input
              type={"phonenumber"}
              id="phonenumber"
              className="phonenumber-input"
              name="phonenumber"
            />
          </div>
          <div className="one">
            <h3>العمر</h3>
            <input type={"number"} id="age" className="age-input" name="age" />
          </div>

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
            //   return register();
            // }}
            className="register-btn"
          >
            التسجيل
          </button>
        </div>
      </div>
    );
  }
}
