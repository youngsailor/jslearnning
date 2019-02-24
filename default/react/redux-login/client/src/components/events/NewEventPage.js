import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventForm from './EventForm';
/**
 * NewEventPage
 */
export class NewEventPage extends Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {

    }
  render() {
    return (
      <div className="form-group">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
              <EventForm />
          </div>
          <div className="col-sm-3"></div>
      </div>
    );
  }
}


export default NewEventPage;
