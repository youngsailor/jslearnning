var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var createSagaMiddleware = require('redux-saga').createSagaMiddleware;
var helloSaga = require('./helloSaga').helloSaga;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga);
