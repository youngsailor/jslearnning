import React, { Component } from 'react';
import {connect}  from 'react-redux';
import {addReminder,deleteReminder,clearReminder} from '../actions';
import moment from 'moment';
class App extends Component {
    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            text:'',
            dueDate:''
        }
    }
    addReminder(){
        console.log(this.state)
        this.props.addReminder(this.state.text,this.state.dueDate)
    }
    deleteReminder(index){
        this.props.deleteReminder(index)
    }
    clearReminder(){
        this.props.clearReminder()
    }
    renderReminders(){
        console.log(this.props.listItem)
        return(
            <ul className='list-group col-sm-8 mt-2'>
                {this.props.listItem.map((item,index)=>{
                    console.log('nihao')
                    return(
                        <li key={index} className="list-group-item">
                            <div className="list-item">
                                <div>{item.text}</div>
                                <div><em>{moment(new Date(item.dueDate)).fromNow()}</em></div>
                            </div>
                            <div className="list-item delete-button" onClick={()=>this.deleteReminder(index)}>&#x2715;</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
    render() {
        return (
          <div className="App">
              <div className="title">Remider Pro</div>
              <div className="form-inline">
                  <div className="form-group">
                      <input type="text" onChange={(event)=>{this.setState({text:event.target.value})}} className="form-control mr-2" placeholder="I have to ..."/>
                      <input type="datetime-local" onChange={(event)=>{this.setState({dueDate:event.target.value})}} className="form-control"/>
                  </div>
                  <button type="button" onClick={()=>this.addReminder()} className="btn btn-success">Add Reminder</button>
              </div>
              {this.renderReminders()}
              <button type="button" onClick={()=>this.clearReminder()} className="btn btn-danger">Clear Reminder</button>
          </div>
        );
    }
}
//此处的state就是reducer返回的值
const mapStateToProps =(state) => {
    console.log(state)
    return({
        listItem:state
    })
}
export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminder})(App);
