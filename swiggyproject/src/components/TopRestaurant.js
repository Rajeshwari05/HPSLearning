
import React, { useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";


export default function TopRestaurant() {
    const scrollContainer = useRef(null);

    const homePageData = useSelector((state) => state.homePageReducerSlice); 

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 400, behavior: "smooth" });
    };

    return (
        <>
            <div className="widthForBody flex spacebetween">
                <h1>Top Restaurants chains in Bangalore</h1>
                <div className="flex arrowGap ">
                    <div onClick={scrollLeft} className="backgrounColorForArrow rounded">
                        <i className="fi fi-rr-arrow-small-left textCenter"></i>
                    </div>
                    <div onClick={scrollRight} className="backgrounColorForArrow rounded">
                        <i className="fi fi-rr-arrow-small-right textCenter"></i>
                    </div>
                </div>
            </div>

            <div ref={scrollContainer} className="widthForBody flex overflow margin topRestaurantImageGap">
                {homePageData.topRestaurantData.map((restaurant) => (
                    <div className="transformScale"key={restaurant.info.id}>
                <RestaurantCard info={restaurant?.info}/>
                    </div>
                
                ))}
            </div>
            <hr className="widthForBody hrHeight" />
        </>
    );
}