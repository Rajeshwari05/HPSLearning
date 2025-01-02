import React from "react";
import "./Component.css";
import { json, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantMenu from "./RestaurantMenu";
import { handleAddToCart } from "./RestaurantMenu";
import { addToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function Search() {
  const [dishData, setDishData] = useState([]);
  const dispatch = useDispatch();

  function handleAddToCart(info, resInfo) {
    console.log("You are in cart");

    dispatch(addToCart({ info, resInfo }));
  }

  async function handleSearch(e) {
    let value = document.getElementsByClassName("searchInput")[0].value;

    let response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.930518&lng=77.568019&str=${value}&trackingId=undefined&submitAction=ENTER&queryUniqueId=e1c27083-7f76-4094-c31f-7bf1d3185a70`
    );
    const result = await response.json();
    console.log(result);
    setDishData(result?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
  }

  return (
    <div>
      <div className="searchSubmit">
        <input
          type="text"
          className="searchInput"
          placeholder="Search for restaurants and food "
        />
        <button type="submit" className="searchButton" onClick={handleSearch}>
          <i className="fi fi-rr-search"></i>
        </button>
      </div>
      <div>
        {dishData.map((card, i) => {
          if (i === 0) {
            return " ";
          } else
            return (
              <div className="dishCard" key={i}>
                <div className="dishDetails">
                  <span className="restaurant">
                    By {card.card.card.restaurant.info.name}
                  </span>
                  <span className="rating">
                    {card.card.card.restaurant.info.avgRatingString} ·{" "}
                    {card.card.card.restaurant.info.sla.slaString}
                  </span>
                  <hr />
                  <span>{card.card.card.info.name}</span>
                  <span>₹{card.card.card.info.price / 100}</span>
                  <div
                    className="addButton "
                    onClick={() =>
                      handleAddToCart(
                        card.card.card.info,
                        card.card.card.restaurant.info
                      )
                    }
                  >
                    ADD
                  </div>
                </div>
                <div className="dishImage">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${card.card.card.info.imageId}`}
                    alt=""
                  />
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}
