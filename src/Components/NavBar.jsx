import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { images } from "../constants";

function NavBar() {
  return (
    <div className="app_nav">
      <div className="nav-logo">
        <Link to="/">
          <img className="logo-img" src={images.logo} alt="" />
        </Link>
      </div>
      <div className="nav-container">
        <div className="separate"></div>
        <Link to="/contact" className="nav-link">
          <h2>Contact</h2>
        </Link>
        <Link to="/about" className="nav-link">
          <h2>About Us</h2>
        </Link>
        <Link to="/ourService" className="nav-link">
          <h2>Our Services</h2>
        </Link>
        <a className="number" href="tel:7184547374">
          Call Us Now
        </a>
      </div>
    </div>
  );
}

export default NavBar;
