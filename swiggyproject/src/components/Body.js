import React from "react";
import OnYourMind from "./OnYourMind";
import TopRestaurant from "./TopRestaurant";
import OnlineFoodDelivery from "./OnlineFoodDelivey";

export default function Body() {
    return (
        <div className="mainSection">
            <OnYourMind />
            <TopRestaurant  />
            <OnlineFoodDelivery />
        </div>
    );
}
