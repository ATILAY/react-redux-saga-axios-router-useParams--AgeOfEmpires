//import {delay} from "redux-saga";

import {takeLatest, takeEvery, put, call,all} from "redux-saga/effects";

import axios from "axios";
import { getPageData} from "./api"
//bunun icine action gomebilirsin
function* allAsync(payload){
  try{
     // const oylesine = action;
      //tying to call our API
      //const res = yield call(getPageData);
      const res = yield call(getPageData, payload )
       //console.log(res);
        yield put({type: "ALL_ASYNC", val: res});
        yield put({type:"AFTERSTART"});
    }catch(e){
        //err
        console.log(e.response.data);
    }
}

 function* watchAll(){
    yield takeEvery("ALL", allAsync, "units" );
    //takeLatest
}
// function* watchDark(){
//     yield takeEvery("DARK");
//     //takeLatest
// }
// function* watchFeudal(){
//     yield takeEvery("FEUDAL");
//     //takeLatest
// }
// function* watchCastle(){
//     yield takeEvery("CASTLE");
//     //takeLatest
// }
// //IMPRERIAL
// function* watchImperial(){
//     yield takeEvery("IMPERIAL");
//     //takeLatest
// }
// //WOODCHECK
// function* watchWoodCheck(){
//     yield takeEvery("WOODCHECK");
//     //takeLatest
// }
// function* watchFoodCheck(){
//     yield takeEvery("FOODCHECK");
//     takeLatest
// }
// function* watchGoldCheck(){
//     yield takeEvery("GOLDCHECK");
//     //takeLatest
// }
// function* watchWoodRange(){
//     yield takeEvery("WOODRANGE");
//     //takeLatest
// }
// function* watchFoodRange(){
//     yield takeEvery("FOODRANGE");
//     //takeLatest
// }
// //GOLDRANGE
// function* watchGoldRange(){
//     yield takeEvery("GOLDRANGE");
//     //takeLatest
// }
///rootSaga inside or not ???
// watchDark(), watchFeudal(), watchCastle(), watchImperial(),
//         watchWoodCheck(), watchFoodCheck(), watchGoldCheck(),
//         watchWoodRange(), watchFoodRange(), watchGoldRange(),
export function* rootSaga(){
    yield all([
        watchAll(), 

    ])
}