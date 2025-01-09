import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../utils/filterSlice";



function OnlineFoodDelivery() {
  const filterOptions = [
    "Ratings 4.5+",
    "Rs. 300-Rs. 600",
    "Offers",
    "Less than Rs. 300",
    "Less than Rs. 100"
  ];
    const homePageData = useSelector((state) => state.homePageReducerSlice); 
  const [activeBtn, setActiveBtn ] = useState(null)
  const dispatch = useDispatch()

  const handleFilterbtnClick = (filterName) => {
    setActiveBtn(filterName);
    dispatch(setFilterValue(filterName));
  };

  return (
    <div className="container widthForBody">
      <h1 className="heading">Restaurants with online food delivery in Bangalore</h1>
      <div className="filter-container">
        {
        filterOptions.map((filterName, i) => (
          <button key={i} className={"filterBtn activeFilterBtn " +(activeBtn === filterName ? "active" : "")}  onClick={() => handleFilterbtnClick(filterName)}>
            <p>{filterName}</p>
            <i className="fi-br-cross"></i>
          </button>
        ))}
      </div>

      <div className="grid-container">
        {homePageData.onlineFoodDeviveryData.map((restaurant) => (
          <div className="grid-item" key={restaurant.info.id}>
            <RestaurantCard info={restaurant?.info} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineFoodDelivery;