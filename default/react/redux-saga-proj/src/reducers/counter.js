import {INCREMENT} from '../constants/counter';
const counter = (state = {}, action = {})=>{
    switch(action.type){
        case INCREMENT:
            return state + 1;
        default:return state;
    }
}
export default counter;
