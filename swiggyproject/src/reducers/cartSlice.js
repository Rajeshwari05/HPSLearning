import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems:  [],
        resInfo:  [],
    },
    reducers: {
        addToCart: (state, action) => {
            const  {info, resInfo} = action.payload
            state.cartItems = [...state.cartItems , info]
            state.resInfo = resInfo
        },
        deleteItem: (state, action) => {
            state.cartItems = action.payload
        },
        clearCart: (state) => {
            state.cartItems = []
            state.resInfo = []
        },
    },
});


export const {addToCart , deleteItem , clearCart} = cartSlice.actions


export default cartSlice.reducer;


