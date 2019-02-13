import {all, fork} from 'redux-saga/effects';
import * as counterSagas from './counter';
import * as userSagas from './user';

export default function* rootSaga(){
    // yield all([
    //     fork(watchIncrementAsync),
    //     fork(watchFetchUser),
    //     fork(watchFetchTodos)
    // ])
    yield all([
        ...Object.values(userSagas),
        ...Object.values(counterSagas)
    ].map(fork))
}
