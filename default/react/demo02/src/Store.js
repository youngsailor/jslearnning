const EventEmitter = require('events').EventEmitter;

class Store extends EventEmitter{
    constructor(){
        this._list = [];
        super();
    }

    _add(item){
        this._list.push(item);
        this.emit('change',this.list);
    }

    get list(){
        return this._list;
    }
}
module.export = Store;
