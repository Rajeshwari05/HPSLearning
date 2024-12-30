import React from "react";
import "./Component.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export function Head() {

  const cartData = useSelector((state) => state.cartSlice.cartItems);
  function handleClickCart(){
    console.log("You are in cart count container")
  }

  const navItems = [
    {
      name : "Swiggy Corporate",
      image : <i className="fi fi-rr-shopping-bag"></i>
    },
    {
       name : "Search",
       image : <i className="fi fi-rr-search"></i>
    },
    {
      name : "Offers",
      image : <i className="fi fi-rr-badge-percent"></i>
    },
    {
      name : "Help",
      image :<i className="fi fi-rr-ring"></i>
    },
    {
      name : "Sign-in",
      image : <i className="fi fi-rr-user"></i>
    },
    {
      name : "Cart",
      image : <i className="fi fi-rr-shopping-cart"></i>
    }

  ]
  return (
    <div className="header">
      <div className="imgotherArrowAdj">
        <div className="imgOther">
          <img
            className="img"
            src="https://tse1.mm.bing.net/th?id=OIP._ViV12AGgkktgO0bh02AGwHaK9&pid=Api&P=0&h=180"
            alt="swiggy-logo"
          />
          <div className="flex">
            <p className="other">other</p>
            <i className="fi fi-rr-angle-small-down arrow"></i>
          </div>
        </div>
     
      <div className="swiggySOHS gap">
        {
          navItems.map((data) => (
            
          
          data.name === "Cart"?(<Link to={"/cart"}  onClick={handleClickCart} className="flex">
          {data.image}
          <p>{data.name}</p>
          <div>
          {data.name === "Cart" &&
            <p>{cartData.length}</p>
          }
          </div>
        </Link>): data.name === "Sign-in" ? ((<Link to={"/sign-in"} className="flex">
          {data.image}
          <p>{data.name}</p>
          <div >
          {data.name === "Cart" &&
            <p>{cartData.length}</p>
          }
          </div>
        </Link>
        )

        ):((<div className="flex">
          {data.image}
          <p>{data.name}</p>
          <div >
          {data.name === "Cart" &&
            <p>{cartData.length}</p>
          }
          </div>
        </div>
        )

        )
          ))
        }
        
      </div>
      </div>
    </div>
  );
}
