import axios from 'axios';
export const userSignupRequest = (userData) => {
    console.log('FlashMessage...')
    return dispatch =>{
        console.log('FlashMessage...')
        return axios.post('/api/users',userData)
    }
}
export const isUserExists = (identifier) => {
    console.log('blur');
    return dispatch =>{
        return axios.get(`/api/users/${identifier}`,identifier);
    }
}
