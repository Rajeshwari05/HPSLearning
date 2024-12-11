// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import '../../src/App.css'
import Register from "./Register";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

