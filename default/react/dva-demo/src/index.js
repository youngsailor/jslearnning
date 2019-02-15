import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

import {createBrowserHistory as createHistory} from 'history';
const logger = store=>next=>action=>{
    console.log('dispatching',action);
    let result = next(action);
    console.log('next state',store.getState());
    return result;
};
const error = store=>next=>action =>{
    try{
        console.log('error');
        next(action)
    }catch(e){
        console.log('error'+e);
    }
}
const extraReducers = {
    form(state = false,action){
        switch(action.type){
            case 'SHOW':
                return true;
            case 'HIDE':
                return false;
            default:
                return state
        }
    }
}
const onEffect = (effect,{put},model,key) =>{
    return function*(...args){
        yield put({type:'SHOW'});
        yield effect(...args);
        yield put({type:'HIDE'});
    }
}
// 1. Initialize
const app = dva({
    history:createHistory(),
    onAction:[logger,error],
    extraReducers:extraReducers,
    onEffect:onEffect
});

// 2. Plugins
// app.use({});
//createLoading会捕获所有异步的action，mapStateToProps中可以打印state，在loading中，同步的不会做处理
app.use(createLoading('user'));

console.log(require('./models').default);
// 3. Model
// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);
require('./models').default.forEach(key=>app.model(key.default));
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
console.log(app);
