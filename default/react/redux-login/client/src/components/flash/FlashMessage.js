import React, { Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/**
 * FlashMessage
 */
export class FlashMessage extends Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        message:PropTypes.object.isRequired,
    }
  render() {
        const {id,type,text} = this.props.message;
        const {closeFlashMessage} = this.props
        console.log(this.props)
        return (
          <div className={classnames('alert',{
                'alert-success':type==='success',
                'alert-danger':type==='danger',
              })}>
              <button onClick={()=>closeFlashMessage(id)} className='close'><span>&times;</span></button>
              {text}
          </div>
        );
  }
}


export default FlashMessage;
