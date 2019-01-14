import EventEmitter from 'events';
import Dispatcher from './Dispatcher';
// const dispatcher = new Dispatcher();
class Store extends EventEmitter {
    constructor() {
        super()
        this._list = [];
        Dispatcher.register(action=>{
            switch (action.actionType) {
                case 'add':
                    this._add(action.name);
                    break;
            }
        });




    }
    _add(item){
        this._list.push(item);
        this.emit("change",this.list);
    }
    get list(){
        return this._list;
    }

}
export default Store;
