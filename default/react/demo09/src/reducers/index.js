import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER} from '../constants';
import {bake_cookie,read_cookie} from 'sfcookies';
const reminder = (action) =>{
    return {
        text:action.text,
        dueDate:action.dueDate,
        id:Math.random()
    }
}
//createStore之后，reducer函数的名字不重要，是随便写的，只要能匹配到type就行，
const reminders = (state=read_cookie('reminders') || [],action={}) => {
    console.log(action)
    console.log(state);
    let reminders = null;
    switch(action.type){
        case ADD_REMINDER:
            reminders = [
                ...state,
                reminder(action)
            ]
            bake_cookie('reminders',reminders)
            return reminders;
        case DELETE_REMINDER:
            reminders = state.concat();
            reminders.splice(action.index,1)
            bake_cookie('reminders',reminders)
            return reminders;
        case CLEAR_REMINDER:
            reminders = []
            bake_cookie('reminders',reminders)
            return reminders;
        default:return state;
    }
}
export default reminders;
