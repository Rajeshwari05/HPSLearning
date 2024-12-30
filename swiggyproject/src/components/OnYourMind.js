import React, { useEffect, useState, useRef } from "react";
export default function OnYourMind(){
    const [data, setData] = useState([]);
        const [header, setHeader] = useState('');
          const scrollContainer = useRef(null);
        
    
        async function fetchData(){
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const result = await response.json();
            console.log(result?.data);
            setData(result?.data.cards[0].card?.card?.imageGridCards?.info)
            setHeader(result?.data.cards[0].card?.card?.header.title)
        }
        useEffect (() => {
            fetchData()}, [])
            const scrollLeft = () => {
                scrollContainer.current.scrollBy({ left: -400, behavior: "smooth" });
              };
            
              const scrollRight = () => {
                scrollContainer.current.scrollBy({ left: 400, behavior: "smooth" });
              };
    return(
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

            <div  ref={scrollContainer} className="widthForBody flex overflow margin ">
               {
                data.map((item, index) => (
                    
                    <img
                    key={index}
                    className="ImageSize translate" src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt=""/>
                ))
                
               }
            </div>
            <hr className="widthForBody hrHeight"/>
            </>
    )
}