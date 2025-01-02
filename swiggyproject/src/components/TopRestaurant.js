
    import React, { useEffect, useState, useRef } from "react";
    import RestaurantCard from "./RestaurantCard";

    export default function TopRestaurant() {
        const [data, setData] = useState([]);
        const [header, setHeader] = useState('');
        const scrollContainer = useRef(null);

        async function fetchData() {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const result = await response.json();
            setHeader(result?.data.cards[1].card?.card?.header.title);
            setData(result?.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        useEffect(() => {
            fetchData();
        }, []);

        const scrollLeft = () => {
            scrollContainer.current.scrollBy({ left: -400, behavior: "smooth" });
        };

        const scrollRight = () => {
            scrollContainer.current.scrollBy({ left: 400, behavior: "smooth" });
        };

        return (
            <>
                <div className="widthForBody flex spacebetween">
                    <h1>{header}</h1>
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
                    {data.map((restaurant) => (
                        <div className="transformScale"key={restaurant.info.id}>
                    <RestaurantCard info={restaurant?.info}/>
                        </div>
                    
                    ))}
                </div>
                <hr className="widthForBody hrHeight" />
            </>
        );
    }
