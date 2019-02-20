import React from 'react'
import PropTypes from 'prop-types'
import SigupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions'
import {addFlashMessage} from '../../actions/flashMessages'
class SignupPage extends React.Component {
    static propTypes = {
        userSignupRequest:PropTypes.func.isRequired,
        addFlashMessage:PropTypes.func.isRequired,
    }
    render () {
        const {addFlashMessage,userSignupRequest} = this.props;
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SigupForm addFlashMessage={addFlashMessage} userSignupRequest={userSignupRequest}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default connect(null,{userSignupRequest,addFlashMessage})(SignupPage);
