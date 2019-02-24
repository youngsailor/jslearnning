import React, { Component } from 'react';
import classnames from 'classnames'
import {createEvent} from '../../actions/eventActions';
import {connect} from 'react-redux';
/**
 * EventForm
 */
export class EventForm extends Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props)
        this.state = {
            title:'',
            errors:{},
            isLoading:false
        }
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.createEvent(this.state);
    }
    render() {
        return (
            <form onSubmit={(e)=>this.onSubmit(e)}>
                <h1>New Event</h1>
                <div className="form-group">
                    <label className="control-label">Title</label>
                    <input value={this.state.title} onChange={(e)=>this.onChange(e)} type="text" name="title" className={classnames("form-control",{'is-invalid':this.state.errors.title})}/>
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                    Create
                    </button>
                </div>
            </form>

        );
    }
}


export default connect(null,{createEvent})(EventForm);
