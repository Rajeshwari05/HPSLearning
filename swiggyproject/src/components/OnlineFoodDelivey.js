import React, { useEffect, useState } from "react";
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
  const [activeBtn, setActiveBtn ] = useState(null)
  const dispatch = useDispatch()


  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [header, setHeader] = useState("");

  // Combine data and remove duplicates by id
  const combinedData = Array.from(
    new Map([...mainData, ...data].map((item) => [item.info.id, item])).values()
  );

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();

    setHeader(result?.data.cards[1].card?.card?.header.title);
    setData(
      result?.data.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setMainData(
      result?.data.cards[4].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }

  useEffect(() => {
    fetchData();
  }, []);
  const handleFilterbtnClick = (filterName) => {
    setActiveBtn(filterName);
    dispatch(setFilterValue(filterName));
  };

  return (
    <div className="container widthForBody">
      <h1 className="heading">{header}</h1>
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
        {combinedData.map((restaurant) => (
          <div className="grid-item" key={restaurant.info.id}>
            <RestaurantCard info={restaurant?.info} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineFoodDelivery;

