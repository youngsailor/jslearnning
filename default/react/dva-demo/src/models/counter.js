import {delay} from 'dva/saga';
import {routerRedux} from 'dva/router';
import queryString from 'query-string';
import pathToRegexp from 'path-to-regexp';
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
    subscriptions:{
        setup({dispatch,history}){
            window.onresize = () =>{
                dispatch({type:'add'})
            }
        },

            // document.addEventListener('click',()=>{
            //     dispatch({type:'add'})
            // });

        onClick({dispatch}){
            document.addEventListener('click',()=>{
                dispatch({type:'asyncAdd'})
            })
        },
        setupHistory({dispatch,history}){
            history.listen((location)=>{
                console.log('aaa')
                console.log(location)
                // if(location.pathname === '/counter'){
                //     dispatch({type:'add'})
                // }
                const match = pathToRegexp('/counter').exec(location.pathname)
                if(match){
                    dispatch({type:'asyncAdd'})
                }
            })
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
            //在models中实现路由跳转,要dispatch这个函数,
            // yield put(routerRedux.push({
            //     pathname:'/',
            //     search:queryString.stringify({
            //         from:'rails365'
            //     })
            // }))
        }
    }
}
