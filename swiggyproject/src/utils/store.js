import { configureStore } from "@reduxjs/toolkit";
import homePageReducerSlice from "../reducers/homePageReducer";
import createSagaMiddleware from "redux-saga";

import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import { watchHomePageSaga } from "../sagas/homePageSaga";
import loaderReducerSlice from "../reducers/loaderReducer";

 const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        cartSlice,
        filterSlice,
        homePageReducerSlice,
        loaderReducerSlice,

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(watchHomePageSaga)

export default store;