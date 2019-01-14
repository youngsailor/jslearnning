import React {Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodAction from '../Action/TodoAction';
import TodoStore from '../Stores/TodoStore';

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:TodoStore.getTodos();
        }
    }
}
