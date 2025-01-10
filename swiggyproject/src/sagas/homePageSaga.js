import {call, put, takeLatest} from "redux-saga/effects";
import * as constants from "../actions/homePageAction";
import {
  storeHomePageData
} from "../reducers/homePageReducer";
import { showLoader } from "../reducers/loaderReducer";
import { hideLoader } from "../reducers/loaderReducer";

//make API call
async function fetchHomePageAPI(){
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result = await response.json();
    return result;   
}

function* fetchHomePageData(){
    try{
        yield put(showLoader())
        const response = yield call(fetchHomePageAPI);
        yield put(storeHomePageData(response))
        yield put(hideLoader())

    }
    catch(error){
    }
}


export function* watchHomePageSaga(){
    yield takeLatest(constants.fetchHomePageData.toString(), fetchHomePageData);
}
    