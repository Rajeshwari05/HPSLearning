import React from "react";
import RestaurantMenu from '../components/RestaurantMenu';
import { Link } from "react-router-dom";
 
function RestaurantCard({info}){

    function restaurantMenuFunction(){
        console.log('inside on click');
    }
    return(
        <>
         <Link className="linkTextDecoration" to={`/restaurantMenu/${info.id}`} >
         <div className="restaurantCard" onClick ={()=> restaurantMenuFunction()}>
                        <img
                            className="TopRestaurantsImageDivSize imageBorder translate"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
                            alt={info?.name}
                        />
                        <div className="imageBlackShadeColor BlackShadowItemFont">
                            <p>{info?.aggregatedDiscountInfoV3?.header} {info?.aggregatedDiscountInfoV3?.subHeader}</p>
                        </div>
                        
                        
                    </div>
                    <div className="detailsSection">
                    <h2 className="detailsSectionMargin subwayFontSize color">{info?.name}</h2>
                    <span className="detailsSectionMargin startIcon ">&#9733;</span>
                    <span className="ratingAndTimeFordistance">{info?.avgRating} {" • " + info?.sla?.slaString}</span>
                    <p className="detailsSectionMargin fontColor marginTop">{info?.cuisines?.join(", ")} </p>
                    <p className="detailsSectionMargin fontColor">{info?.areaName}</p>
                    </div>
                    </Link>

        </>
    )
}
export default RestaurantCard;