let next = store.dispatch;
dispatchAndLog(store){
    return function(next){
        console.log(store.getState());
        next();
    }
}
const applyMiddleware = function(middleware){
  store.dispatch = middleware(store)(next);  // 这里传入store，是因为中间件中有可能会用到getState获取数据，比如打印当前用户等需求
}

applyMiddleware(dispatchAndLog)