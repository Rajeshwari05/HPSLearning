import React from "react";
import { Head } from "./components/Head";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Help from "./components/Help";
import { SwiggyCorporate } from "./components/SwiggyCorporate";
import Search from "./components/Search";

export default function App() {
  return (
    <Router>
      <>
        <Head />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/restaurantMenu/:id" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/corporate" element={<SwiggyCorporate />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </>
    </Router>
  );
}
