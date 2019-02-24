import isEmpty from 'lodash/isEmpty';
let initialState = {
    isAuthenticated:false,
    user:{}
}

export default function auth(state = initialState, action) {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                isAuthenticated:!isEmpty(action.user),
                user:action.user
            }
        default:return state;
    }

}
