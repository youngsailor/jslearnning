import axios from 'axios';

const setAuthorizationToken = (token) =>{
    if(token){
        axios.default.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete axios.default.headers.common['Authorization'];
    }
}
export default setAuthorizationToken;
