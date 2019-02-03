const counter = (state =0,action = {})=>{
    //reducer中的state是该reducer上次return的值，只是本reducer的。
    switch(action.type){
        case 'INCREMENT':
            // throw new Error('error in INCREMENT')
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:return state;
    }
}
export default counter;
