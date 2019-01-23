import React from 'react';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';


class UserList extends React.Component{
    render(){
        let usersdom = this.props.users.map(user=><li>{user.name}</li>)
        return(
            <ul>
                {usersdom}
            </ul>
        )
    }
}
export default UserList;
