import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers';
import {increment,decrement} from './actions';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

// const logger = store => next => action =>{
//     console.log('dispatching',action);
//     let result = next(action);
//     console.log('next state',store.getState());
//     return result;
// }
// const error = store => next => action =>{
//     try{
//         next(action)
//     }catch(e){
//         console.log('error' + e);
//     }
// }
// const store = createStore(rootReducer,applyMiddleware(logger,error));
const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
    {
    /* <App store={store}/>
     */}
    <App />
    </Provider>,
    document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
