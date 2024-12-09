// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import '../../src/App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
