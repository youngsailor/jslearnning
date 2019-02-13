import {delay} from 'dva/saga';
export default {
    namespace:'counter',
    state:{count:1},
    reducers:{
        add(state,action){
            console.log(action)
            return {
                count:state.count+1
            }
        }
    },
    effects:{
        *asyncAdd({payload},{call,put,select}){
            //select可以取出state中的某些数据
            const counter = yield select(state => state.counter)
            //以下三种写法均常见
            // const counter = yield select(_ => _.counter)
            // const counter = yield select(({counter}) => counter)
            // const {counter} = yield select(_=>_);
            console.log(counter)
            yield call(delay,1000);
            yield put({type:'add'});
        }
    }
}
