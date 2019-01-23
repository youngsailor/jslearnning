import React from 'react';
class Navbar extends React.Component{
    render(){
        return(
            <ul>
                <li><a href="#" onClick={e=>{this.props.link('about');return false;}}>About</a></li>
                <li><a href="#" onClick={e=>{this.props.link('userlist');return false;}}>UserList</a></li>
                <li><a href="#" onClick={e=>{this.props.link('login');return false;}}>Login</a></li>
            </ul>
        )
    }
}
export default Navbar;
