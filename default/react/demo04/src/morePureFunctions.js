let state={
    aaa:{name:'leo'},
    bbb:{group:'javascript'}
}
function update(updaters,state){

    let newState = {};
    const keys = Object.keys(updaters);
    keys.forEach(key=>{
        let updater = updaters[key]
        let value = state[key];
        let newSubState = updater(value);
        newState[key] = newSubState;
    })
    let result = Object.assign({},state,newState);
    console.log(result);
}
function aaaUpdater(subState){
    return {name:'liangzeng'};
}
function bbbUpdater(subState){
    return {group:'node.js'};
}
update({
    aaa:aaaUpdater,bbb:bbbUpdater
},state);
