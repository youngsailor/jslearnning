import Dispatcher from './Dispatcher';
class Actions{

    add(name){
        var action = {
            actionType:'add',
            name
        }
        Dispatcher.dispatch(action);
    }

}
export default Actions;
