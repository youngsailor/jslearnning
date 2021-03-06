import shortid from 'shortid';
import findIndex from 'lodash/findIndex'
function flashMessages(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_FLASH_MESSAGE':
      return [
          ...state,
          {
              id:shortid.generate(),
              type:action.message.type,
              text:action.message.text
          }
      ];
    case 'CLOSE_FLASH_MESSAGE':
        const index = findIndex(state,{id:action.messageId})
        if(index >=0 ){
            return [
                ...state.slice(0,index),
                ...state.slice(index+1)
            ]
        }
        return state;
    default:
      return state;
  }
}

export default flashMessages;
