const A = require('./A.js');
const React = require('react');

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        };
    }
    add(){
        A.a();
    }

    render(){
        return (
            <div>
            <button onClick = {this.add.bind(this)}>
                haha
            </button>
            </div>
        )
    }
}
module.exports = List;
