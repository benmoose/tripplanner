import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import AuthService from '../utility/AuthService';

import configureStore from '../configureStore';
import { getUserToken, getUser } from '../actions/user';

import App from './App';
import Login from '../components/Login/';
import MyTrip from './pages/MyTrip';


const store = configureStore();

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);

// validate user for private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace('/login');
    } else {
        store.dispatch(getUserToken({token: auth.getToken()}));
        store.dispatch(getUser());
    }
};

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App} auth={auth}>
                        <Route path="login" component={Login}/>
                        <Route path="foo0" component={MyTrip} onEnter={requireAuth}/>
                        <Route path="foo1" component={MyTrip} onEnter={requireAuth}/>
                        <Route path="foo2" component={MyTrip} onEnter={requireAuth}/>
                        <Route path="foo3" component={MyTrip} onEnter={requireAuth}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
