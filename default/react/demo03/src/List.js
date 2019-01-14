import React,{ Component } from 'react';
import Store from './Store';
import Actions from './Actions';

const actions = new Actions();
const store = new Store();

class List extends Component{
    constructor(props) {
        super(props);
        this.state={
            list:[],
        };
    }
    add(){
        // store._add(this.refs.nameInput.value);
        actions.add(this.refs.nameInput.value);
    };
    componentDidMount(){
        store.on('change',list=>{
            this.setState({list});
        })
        console.log('aaa');
    };
    render(){
        return(
            <ul>
                {this.state.list.map((item,index)=><li key={index}>{item}</li>)}
                <li>
                    <input ref="nameInput" />
                    <button onClick={this.add.bind(this)}>add</button>
                </li>
            </ul>
        )
    }

}
export default List;
