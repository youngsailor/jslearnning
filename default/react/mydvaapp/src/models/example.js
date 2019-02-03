import key from 'keymaster';
import {delay} from '../utils/utils';
export default {

  namespace: 'count',

  state: {
      record:0,
      current:0,
  },

  subscriptions: {
      keyboardWatcher({ dispatch }) {
          key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
      },
  },


  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
    *add(action,{call,put}){
        yield call(delay,1000);
        yield put({type:'minus'});
        yield put({type:'add1'});
    }
  },

  reducers: {
      add1(state){
          const newCurrent = state.current +1;
          return{
              ...state,
              record:newCurrent>state.record?newCurrent:state.record,
              current:newCurrent,
          };
      },
      minus(state){
          return{...state,current:state.current -1};
      },
  },

};
