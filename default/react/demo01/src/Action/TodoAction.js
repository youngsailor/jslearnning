import Todo from '../Dispatcher/TodoDispather';
import TodoConstants from '../Constants/TodoConstants';
const TodeAction = {
    loadData(){
        fetch('todos.json')
            .then((responseData)=>responseData.json())
            .then((todos)=>{
                this.setState({todos})
                TodoDispather.dispatch({
                    type:TodoConstants.LOAD_DATA,
                    todos
                });
            })
    },

    toggleItem(id){
        TodoDispather.dispatch({
            type:TodoConstants.TOGGLE_ITEM,
            id
        });
    },
    removeItem(id){
        TodoDispather.dispatch({
            type:TodoConstants.REMOVE_ITEM,
            id
        });
    },
    createItem(title){
        TodoDispather.dispatch({
            type:TodoConstants.CREATE_ITEM,
            title
        });
    },
    editItem(title,id){
        TodoDispather.dispatch({
            type:TodoConstants.EDIT_ITEM,
            title,
            id

        });
    }
}
export default TodeAction;
