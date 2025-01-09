import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
};

const loaderReducerSlice = createSlice({
    name : "loaderReducer",
    initialState ,
    reducers: {       
        showLoader : (state, action) =>{
            state.isLoading = true;
        },
        hideLoader:(state, action) => {
            state.isLoading = false;
        }
    }
})
const {
    reducer :loaderReducer,
    actions : {
        showLoader, hideLoader
    }
} = loaderReducerSlice

export {
    showLoader, hideLoader
}

export default loaderReducer;