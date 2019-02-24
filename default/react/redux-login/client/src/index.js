import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/NavigationBar';
import FlashMessagesList from './components/flash/FlashMessagesList';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import thunk from 'redux-thunk'
import setAuthorizationToken from './utils/setAuthorizationToken';
import {setCurrentUser} from './actions/authActions';
import jwtDecode from 'jwt-decode';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavigationBar/>
                <FlashMessagesList/>
                {routes}
            </div>
        </Router>
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
