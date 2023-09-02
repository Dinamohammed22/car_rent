import React, { Component } from "react";
import Mainpage from "./Mainpage";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Cars from "./Cars";
import Contactus from "./Contactus";
import Footer from "./Footer";

import { Route, BrowserRouter, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
