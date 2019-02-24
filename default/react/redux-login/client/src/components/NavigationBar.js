import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/authActions';

/**
 * NavigationBar
 */
export class NavigationBar extends Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        auth : PropTypes.object.isRequired,
        logout:PropTypes.func.isRequired
    }
    logout = (e) =>{
        e.preventDefault();
        this.props.logout();
    }


    render() {
        const {isAuthenticated,user} = this.props.auth;
        console.log(user);
        const userLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/new-event">new event</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick = {(e)=>this.logout(e)}>{user.username}  Logout</a>
                </li>
            </ul>
        )
        const guestLinks = (
             <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/new-event">new event</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">login</Link>
                </li>
            </ul>
        )
        return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                      <div className="container">
                        <Link className="navbar-brand" to="/">ReduxLogin</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample07">
                            { isAuthenticated ? userLinks :guestLinks }
                        </div>
                      </div>
                  </nav>
            </div>
        );
    }
}

// NavigationBar.propTypes = {
//   prop: PropTypes.number.isRequired
// }
const mapStateToProps = (state) =>{
    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps,{logout})(NavigationBar);
