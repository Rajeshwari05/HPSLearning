
import { createSlice } from '@reduxjs/toolkit';


    const initialState = {
        onYourMindData : [],
        topRestaurantData : [],
        onlineFoodDeviveryData : []
    }

    const homePageReducerSlice = createSlice({
        name :"homePageReducer",
        initialState,
        reducers :{
            storeHomePageData : (state, action) =>{
                console.log("I am in Store");

                state.onYourMindData = action.payload.data.cards[0].card.card.imageGridCards.info;
                state.topRestaurantData = action.payload.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                state.onlineFoodDeviveryData = [...action.payload.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
                                               ...action.payload.data.cards[4].card.card.gridElements.infoWithStyle.restaurants]
                                               console.dir(state);

            }
        }
    })

    const {
        reducer: homePageReducer,
        actions: {
            storeHomePageData
        }
    } = homePageReducerSlice

    export {
        storeHomePageData
    }

    export default homePageReducer;