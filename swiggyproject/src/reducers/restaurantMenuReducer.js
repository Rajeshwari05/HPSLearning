import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    restaurantMenuData : {},
    itemsInfo: []
}

const restaurantMenuReducerSlice = createSlice({
    name : "restaurantMenuReducer",
    initialState,
    reducers : {
        storeRestaurantMenuData : (state, action) =>{
            console.log(`in store`)
            console.log(action.payload.data);
           state.restaurantMenuData = action.payload?.data?.cards[2].card?.card?.info;
           state.itemsInfo = action.payload?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
        }
    }
})

const {
    reducer : restaurantMenuReducer,
    actions:{
        storeRestaurantMenuData
    }
}=restaurantMenuReducerSlice

export{
    storeRestaurantMenuData
}
export default restaurantMenuReducer;
    