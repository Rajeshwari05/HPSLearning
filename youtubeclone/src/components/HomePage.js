import React from "react";
import "./component.css";
import Body from "./Body";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchHomePageData } from "../actions/homePageAction";

export default function HomePage(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHomePageData());
     }, [dispatch]);

   return(
        <div >
            <Body/>   
        </div>
    )
}