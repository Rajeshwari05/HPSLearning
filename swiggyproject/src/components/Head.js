import React, { useEffect } from "react";
import "./Component.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchHomePageData } from "../actions/homePageAction";
import swiggylogo from '../Images/swiggy-logo.jpg'

export function Head() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const location = useLocation(); 

 
  useEffect(() => {
     dispatch(fetchHomePageData());
  }, []);


  function handleClickCart() {
    console.log("You are in cart count container");
  }

  const navItems = [
    {
      name: "Swiggy Corporate",
      path: "/corporate",
      image: <i aria-label="Corporate Icon" className="fi fi-rr-shopping-bag"></i>,
    },
    {
      name: "Search",
      path: "/search",
      image: <i  aria-label="Corporate Icon" className="fi fi-rr-search"></i>,
    },
    {
      name: "Help",
      path: "/help",
      image: <i aria-label="Corporate Icon" className="fi fi-rr-ring"></i>,
    },
    {
      name: "Sign-in",
      path: "/sign-in",
      image: <i aria-label="Corporate Icon" className="fi fi-rr-user"></i>,
    },
    {
      name: "Cart",
      path: "/cart",
      image: <i  aria-label="Corporate Icon" className="fi fi-rr-shopping-cart"></i>,
    },
  ];

  return (
    <div className="header">
      <div className="imgotherArrowAdj">
        <div className="imgOther">
          <img
            className="img"
            src={swiggylogo}
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