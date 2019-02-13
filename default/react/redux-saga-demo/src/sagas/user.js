// import {delay} from 'redux-saga';
import {takeEvery,put,delay,call,all} from 'redux-saga/effects';
import axios from 'axios';
//takeLatest是在delay时间之内执行最后一次
// const delay = (ms) => new Promise(resolve=>setTimeout(resolve,ms))

function* fetchUser(){
    console.log('aaa')
    try{
        const user = yield call(axios.get,'https://jsonplaceholder.typicode.com/users')
        yield put({type:'FETCH_USER_SUCCEEDED',user:user})
        console.log(user)
    } catch(e){
        yield put({type:"FETCH_USER_FAILURE",error:e.message});
    }
}
function* fetchTodos(){
    console.log('aaa')
    const todos = yield call(axios.get,'https://jsonplaceholder.typicode.com/todos')
    console.log(todos)
    console.log('bbb')
}
export function* watchFetchUser(){
    console.log('bbbs')
    console.log('niha')
    yield takeEvery('FETCH_USER_REQUEST',fetchUser)
}
export function* watchFetchTodos(){
    console.log('bbbs')
    console.log('niha')
    yield takeEvery('FETCH_USER_REQUEST',fetchTodos)
}
