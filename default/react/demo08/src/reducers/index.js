import {combineReducers} from 'redux';
import counter from './counter';
import user from './user';

var user1 = user
const rootReducer = combineReducers({counter,user1});
export default rootReducer;
