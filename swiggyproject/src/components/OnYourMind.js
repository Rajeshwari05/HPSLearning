import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function OnYourMind() {
  const [header, setHeader] = useState("");
  const [data, setData] = useState([]);
  const scrollContainer = useRef(null);
  const dispatch = useDispatch();
   
  const homePageData = useSelector((state) => state.homePageReducerSlice); 

console.log(homePageData);
  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 400, behavior: "smooth" });
  };
  return (
    <>
      <div className="widthForBody flex spacebetween">
        <h1>What's On Your Mind?</h1>
        <div className="flex arrowGap ">
          <div onClick={scrollLeft} className="backgrounColorForArrow rounded">
            <i className="fi fi-rr-arrow-small-left textCenter"></i>
          </div>
          <div onClick={scrollRight} className="backgrounColorForArrow rounded">
            <i className="fi fi-rr-arrow-small-right textCenter"></i>
          </div>
        </div>
      </div>

      <div ref={scrollContainer} className="widthForBody flex overflow margin ">
        {homePageData.onYourMindData.map((item, index) => (
          <img
            key={index}
            className="ImageSize translate"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
            alt=""
          />
        ))}
      </div>
      <hr className="widthForBody hrHeight" />
    </>
  );
}
