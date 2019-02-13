// import {delay} from 'redux-saga';
import {takeEvery,put,delay,call} from 'redux-saga/effects';
import axios from 'axios';
//takeLatest是在delay时间之内执行最后一次
// const delay = (ms) => new Promise(resolve=>setTimeout(resolve,ms))
function* incrementAsync(){
    // yield call(delay,2000);
    yield delay(2000);
    yield put({type:'INCREMENT'})
    console.log('helloworkd')
}
export function* watchIncrementAsync(){
    yield takeEvery("INCREMENT_ASYNC",incrementAsync);
}
