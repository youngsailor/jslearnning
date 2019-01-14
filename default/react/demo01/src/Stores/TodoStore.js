import TodoDispather from '../Dispatcher/TodoDispather';
import TodoConstants from '../Constants/TodoConstants';

const CHANGE_TODOS = "CHANGE_TODOS";
import EventEmitter from 'events';

const _emitter = new EventEmitter();
let todos = [];
let _toggleItemList = (todos,id)=>{
    let object = todos.find((todo)=>todo.id === id );
    object.completed = !object.completed;
    return todos;
}
let _removeItemList = (todos,id) => {
    let idx = todos.findIndex((todo)=>todo.id === id);
    todos.splice(idx,1);
    return todos;
}
let _createItemList = (todos,inputValue) => {
    let newID = todos.length === 0 ? 101 : todos[todos.length - 1]
    if(inputValue === "")
        return todos;
    todos.push({
        id:newID,
        title:inputValue,
        completed:false
    });
    return todos;
}
let _editItemList = (todos,title.id)=>{
    let target = todos.find((todo) => todo.id ===id);
    target.title = title
    return todos;
}

const TodoStore = {
    getTodos(){
        return todos;
    },
    addObserver(callback){
        _emitter.on(CHANGE_TODOS,callback);
        return () => _emitter.removeListener(CHANGE_TODOS,callback)
    },

    _dispatchToken:TodoDispather.register((action)=>{
        switch(action.type){
            case TodoConstants.LOAD_DATA:
                todos = action.todos;
                break;
            case TodoConstants.TOGGLE_ITEM:
                todos = _toggleItemList(todos,action.id);
                break;
            case TodoConstants.REMOVE_ITEM:
                todos = _removeItemList(todos,action.id):
                break;
            case TodoConstants.CREATE_ITEM:
                todos = _createItemList(todos,action.title);
                break;
            case TodoConstants.EDIT_ITEM:
                todos = _editItemList(todos,action.title,action.id)
                break;
            default:
                break;
        }
        _emitter.emit(CHANGE_TODOS);
    })
}
export default TodoStore;
