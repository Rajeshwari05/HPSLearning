import React, { useState } from "react";
import OnYourMind from "./OnYourMind";
import TopRestaurant from './TopRestaurant';
import OnlineFoodDelivery from './OnlineFoodDelivery';
import Loader from "./Loader";
import { useSelector } from "react-redux";


export default function Body() {

  const isLoading = useSelector(state => state.loaderReducerSlice.isLoading);

  return (

    <div className="mainSection">  
    {isLoading? (<Loader/>):
      (  <>
      <OnYourMind />
      <TopRestaurant  />
      <OnlineFoodDelivery />
      </>)
}
      </div>
  );
}