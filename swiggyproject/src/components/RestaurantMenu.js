import React, { useEffect, useState, useRef } from "react";
import "./Component.css";
import { json, Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import Loader from "./Loader";


function RestaurantMenu() {

  const isLoading = useSelector(state => state.loaderReducerSlice.isLoading);
  
  const { id } = useParams();

  const [restaurantData, setRestaurantData] = useState([]);
  const [header, setHeader] = useState("");
  const [itemsInfo, setItemsInfo] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescripton] = useState(null);
  const [selectedDefaultPrice, setSelectedDefaultPrice] = useState(null);
  const dispatch = useDispatch()


  async function fetchData() {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const result = await response.json();
      setHeader(result);
      setRestaurantData(result?.data?.cards[2].card?.card?.info);
      setItemsInfo(
        result?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      console.log(id);
   
  }

  useEffect(() => {
    fetchData();
  }, []);
  function handleClickImage(item) {
    console.log("You are in image tag");
    setSelectedName(item.name);
    setSelectedImage(item.imageId);
    setSelectedDescripton(item.description);
    setSelectedDefaultPrice(item.defaultPrice);
  }
  function handleAddToCart(info, resInfo){
    console.log("You are in cart");

    dispatch(addToCart({info, resInfo}))

  }

  const closePopup = () => {
    setSelectedName(null);
  };

  return (
    
    <div className="restaurant-container">
     
     <div className="restaurant-header">
        <h2>{restaurantData.name}</h2>
      </div>
      <div className="restaurant-details">
        <span className="rating">{restaurantData.avgRatingString}</span>
        <span className="cost">{restaurantData.costForTwoMessage}</span>
        <span className="cuisine">{restaurantData.cuisines?.join(", ")}</span>
        <span className="location">Outlet: {restaurantData.areaName}</span>
      </div>
      <p className="delivery-time">25 - 30 mins</p>

      <div className="menu-section">
        {itemsInfo.map((itemInfo, i) => {
          if (i === 1) {
            return (
              <div>
                <h3>
                  {itemInfo.card.card.title} (
                  {itemInfo.card.card.itemCards.length})
                </h3>
                <div>
                  {itemInfo.card.card.itemCards.map((itemCard) => {
                    return (
                      <div className="menu-item">
                        <div className="menu-item-details">
                          <p>{itemCard.card.info.name}</p>
                          <span>
                            ₹
                            {itemCard.card.info.defaultPrice
                              ? (itemCard.card.info.defaultPrice / 100).toFixed(
                                  2
                                )
                              : "00"}
                          </span>
                          <p>{itemCard.card.info.description}</p>
                        </div>

                        <div>
                          <img
                            onClick={() => handleClickImage(itemCard.card.info)}
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${itemCard.card.info.imageId}`}
                            alt="itemCard.card.info"
                          />
                          <button onClick={() =>handleAddToCart(itemCard.card.info, restaurantData)} className="add-btn addGrid">ADD</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      

      {selectedName && (
        <div className="popup-overlay">
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              X
            </button>
            <img
              className="imageStyling"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${selectedImage}`}
              alt={selectedName}
            />
            <div className="popupPadding">
            <h3>{selectedName}</h3>
            <p>{selectedDescription}</p>
            <span>
              ₹
              {selectedDefaultPrice
                ? (selectedDefaultPrice / 100).toFixed(2)
                : "00"}
            </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantMenu;