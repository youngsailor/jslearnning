import { FETCH_USER_SUCCESS } from '../constants';

export const user = (state={},action={})=>{
    console.log(state)
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            console.log(state);
            return Object.assign({},state,action.ress)
        case 'FETCH_USER_FAILURE':
            console.log('fetching error');
            return {};
        default:return state;
    }
}
export default user;
