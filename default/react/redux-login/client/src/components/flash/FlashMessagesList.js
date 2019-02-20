import React, { Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import {closeFlashMessage} from '../../actions/flashMessages';
/**
 * FlashMessagesList
 */
export class FlashMessagesList extends Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        messages:PropTypes.array.isRequired,
        closeFlashMessage:PropTypes.func.isRequired
    }
    render() {
        const {closeFlashMessage} = this.props;
        const messages = this.props.messages.map(message =>{
                  return <FlashMessage closeFlashMessage={closeFlashMessage} key={message.id} message={message}/>
              }
          )
        return (
            <div className="container">{messages}</div>
        );
    }
}


const mapStateToProps = (state)=>{
    console.log(state)
    return (
        {messages:state.flashMessages}
    )
}
export default connect(mapStateToProps,{closeFlashMessage})(FlashMessagesList);
