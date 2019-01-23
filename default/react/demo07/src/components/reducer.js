function reducer(state,action){
    if(typeof state === 'undefined') return{
        linkName:'about',
        users:[
            {name:'leo'},
            {name:'zengliang'}
        ]
    };
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'link':
            return Object.assign({},state,{linkName:action.payload})
        default:return state;
    }
};

export default reducer;
