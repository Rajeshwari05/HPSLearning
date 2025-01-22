import { configureStore } from "@reduxjs/toolkit";
import homePageReducerSlice from "./reducer/homePageReducer";
import createSagaMiddleware from "redux-saga";
import { watchHomePageSaga } from "./saga/homePageSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        homePageReducerSlice: homePageReducerSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware)
    
})
sagaMiddleware.run(watchHomePageSaga)

export default store;