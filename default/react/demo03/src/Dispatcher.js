import React,{Component} from 'react';
const storeCallbackList = [];
class Dispatcher extends Component {

    register(storeCallback){
        storeCallbackList.push(storeCallback);
    }
    dispatch(action){
        for(let callback of storeCallbackList){
            callback(action);
        }
    }

}
export default new Dispatcher;
