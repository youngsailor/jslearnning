import axios from 'axios';
export const userSignupRequest = (userData) => {
    console.log('FlashMessage...')
    return dispatch =>{
        console.log('FlashMessage...')
        return axios.post('/api/users',userData)
    }
}
