import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="container navbar-content">
        <div className="logo">Syed Meeran Khan</div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;