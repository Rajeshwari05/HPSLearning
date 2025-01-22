import { call, put, takeLatest } from "redux-saga/effects";
import * as constants from "../actions/homePageAction";
import { storeHomePageData } from "../reducer/homePageReducer";
import { storeSearchPageData } from "../reducer/homePageReducer";

async function fetchHomePageAPI() {
  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDaiq2ymb004NDevA0dgJ_zFahF5f4OL-4&chart=mostPopular&maxResults=1000&part=snippet,contentDetails,statistics"
  );
  const result = await response.json();
  console.log("I am in saga");

  return result;
}
async function fetchSearchPageAPI(action) {
  console.log(action.payload);
  let response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDaiq2ymb004NDevA0dgJ_zFahF5f4OL-4&part=snippet&q=${action.payload.searchValue}&maxResults=10&v=ImBV4_sGjCU`
  );
  const result = await response.json();
  console.log(result);
}

function* fetchHomePageData() {
  try {
    const response = yield call(fetchHomePageAPI);
    yield put(storeHomePageData(response));
  } catch (error) {}
}
function* fetchSearchPageData(action) {
  try {
    const response = yield call(fetchSearchPageAPI, action);
    yield put(storeSearchPageData(response));
  } catch (error) {}
}
export function* watchHomePageSaga() {
  yield takeLatest(constants.fetchHomePageData.toString(), fetchHomePageData);
  yield takeLatest(
    constants.fetchSearchPageData.toString(),
    fetchSearchPageData
  );
}
