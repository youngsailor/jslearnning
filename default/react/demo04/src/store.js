class Store{
    constructor(state){
        this._state = state || {};
    }
    get state(){
        return JSON.parse(JSON.stringify(this._state));
    }
    //fns -function or object
    setUpdates(fns){
        this._updates = fns;
    }
    //action
    dispatch(action){
        this._state = this._updates(this.state,action); //return new State;
    }
}
