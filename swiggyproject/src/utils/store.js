import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";


const store = configureStore({
    reducer : {
        cartSlice,
        filterSlice

    }
})

export default store;