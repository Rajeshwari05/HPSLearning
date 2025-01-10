import { configureStore } from "@reduxjs/toolkit";
import homePageReducerSlice from "../reducers/homePageReducer";
import createSagaMiddleware from "redux-saga";

import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import { watchHomePageSaga } from "../sagas/homePageSaga";
import loaderReducerSlice from "../reducers/loaderReducer";
import restaurantMenuReducerSlice from "../reducers/restaurantMenuReducer";
import { watchRestaurantMenuSaga } from "../sagas/restaurantMenuSaga";
 const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        cartSlice,
        filterSlice,
        homePageReducerSlice,
        loaderReducerSlice,
        restaurantMenuReducerSlice

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(watchHomePageSaga)
sagaMiddleware.run(watchRestaurantMenuSaga)

export default store;