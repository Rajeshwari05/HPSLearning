import {call, put, takeLatest} from "redux-saga/effects";
import * as constants from "../actions/restaurantMenuAction";
import { hideLoader, showLoader } from "../reducers/loaderReducer";
import { storeRestaurantMenuData } from "../reducers/restaurantMenuReducer";

async function fetchRestarentMenuAPI(action) {

    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${action.payload.id}&catalog_qa=undefined&submitAction=ENTER`);
    const result = await response.json();
    return result;
}
function* fetchRestarentMenu(action){
    try{
        yield put(showLoader());
        const response = yield call(fetchRestarentMenuAPI, action);
        console.log(`fetchRestarentMenu(action`)
        console.log(`in saga call`);
        console.log(action);

        
        yield put(storeRestaurantMenuData(response))
        yield put(hideLoader());
    }catch(error){

    }
}

export function* watchRestaurantMenuSaga(){

    yield takeLatest(constants.fetchRestaurantMenu.toString(),fetchRestarentMenu);
}