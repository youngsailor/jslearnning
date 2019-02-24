import React, { Component } from 'react';
import { addFlashMessage } from '../actions/flashMessages';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
/**
 * Authenticate
 */
export default function(ComposedComponent) { // eslint-disable-line react/prefer-stateless-function
    class Authenticate extends Component{
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type:'danger',
                    text:'You need to login to access this page'
                })
                this.props.history.push('/')
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.props.history.push('/');
            }
        }
      render() {
        return (
          <ComposedComponent {...this.props}/>
        );
      }
    }
    const mapStateToProps = (state) =>{
        return {
            isAuthenticated:state.auth.isAuthenticated
        }
    }
    return connect(mapStateToProps,{addFlashMessage})(withRouter(Authenticate));
}
