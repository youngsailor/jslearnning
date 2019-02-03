import {INCREMENT,DECREMENT,FETCH_USER_SUCCESS} from '../constants';
import axios from 'axios';
export const increment = () => {
    return{
        type:INCREMENT
    }
}
export const decrement = () => {
    return{
        type:DECREMENT
    }
}
export const get_user = () => {
    let ress = ''
    return dispatch =>{
        axios.get('https://randomuser.me/api/')
            .then(res => {
                console.log(res);
                console.log(res.data.results[0].email)
                ress = {email:res.data.results[0].email};
                console.log(ress);
                dispatch({
                    type:FETCH_USER_SUCCESS,
                    ress
                })
            }).catch(error=>{
                console.log(error)
                dispatch({
                    type:'FETCH_USER_FAILURE',
                    error
                })
            })
    }

}
export const get_name = () => {
    console.log('bbb')
    return {
        type:'bbb'
    }
}
