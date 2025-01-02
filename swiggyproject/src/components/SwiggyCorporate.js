import React from "react";
import "./Component.css";
import { Link } from "react-router-dom";

export function SwiggyCorporate() {
  return (
    <div className="corporate-container">
      <h1>Welcome to Swiggy Corporate</h1>
      <p>
        Empower your teams with delicious meals. Partner with Swiggy Corporate
        for a seamless food experience.
      </p>
      <div className="corporate-content">
        <img
          src="https://upvey.com/wp-content/uploads/2020/06/online-food-delivery-industry-300x169.jpg"
          alt="Corporate Meals"
          className="corporate-img"
        />
        <div className="info">
          <h2>Why Swiggy Corporate?</h2>
          <p>
            Swiggy Corporate lets you manage food orders, employee meal benefits
            and more with ease.
          </p>
          <Link to="/home">
          <button className="btn" >Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
