import React from "react";
import Logo from "../images/reactjs-logo.png";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="react-logo" />
          <h2>ReactFacts</h2>
        </div>
        <div>
          <h3>React Basic Interface </h3>
        </div>
      </div>
    </div>
  );
}
