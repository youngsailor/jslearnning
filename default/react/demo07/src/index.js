import React from 'react';
import ReactDOM from 'react-dom';
import App,{store} from './App';
import * as serviceWorker from './serviceWorker';

import {connect,Provider} from 'react-redux';



ReactDOM.render(<Provider store={store}><App /></Provider>,document.body);
// ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
