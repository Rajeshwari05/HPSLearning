import React from "react";
import "./Component.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export function Head() {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const location = useLocation(); // Hook to get current path


  function handleClickCart() {
    console.log("You are in cart count container");
  }

  const navItems = [
    {
      name: "Swiggy Corporate",
      path: "/corporate",
      image: <i className="fi fi-rr-shopping-bag"></i>,
    },
    {
      name: "Search",
      path: "/search",
      image: <i className="fi fi-rr-search"></i>,
    },
    {
      name: "Help",
      path: "/help",
      image: <i className="fi fi-rr-ring"></i>,
    },
    {
      name: "Sign-in",
      path: "/sign-in",
      image: <i className="fi fi-rr-user"></i>,
    },
    {
      name: "Cart",
      path: "/cart",
      image: <i className="fi fi-rr-shopping-cart"></i>,
    },
  ];

  return (
    <div className="header">
      <div className="imgotherArrowAdj">
        <div className="imgOther">
          <img
            className="img"
            src="https://tse1.mm.bing.net/th?id=OIP._ViV12AGgkktgO0bh02AGwHaK9&pid=Api&P=0&h=180"
            alt="swiggy-logo"
          />
          <div className="flex">
            <p className="other">other</p>
            <i className="fi fi-rr-angle-small-down arrow"></i>
          </div>
        </div>

        <div className="swiggySOHS gap">
          {navItems.map((data) => (
            <Link
              key={data.name}
              to={
                data.name === "Search" ? "/search"
                  :  data.name === "Swiggy Corporate"
                  ? "/corporate"
                  : data.name === "Help"
                  ? "/help"
                  : data.name === "Cart"
                  ? "/cart"
                  : data.name === "Sign-in"
                  ? "/sign-in"
                  : "#"
              }
              onClick={data.name === "Cart" ? handleClickCart : null}
              className={`flex linkTextDecoration color hoverColor ${location.pathname === data.path ? "active" : " "}`}
            >
              {data.image}
              <p>{data.name}</p>
              {data.name === "Cart" && <p>{cartData.length}</p>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
