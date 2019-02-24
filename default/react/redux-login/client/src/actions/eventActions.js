import axios from 'axios';
export function createEvent(event) {
  return (dispatch, getState) => {
      return axios.post('/api/events',event);

  };
}
