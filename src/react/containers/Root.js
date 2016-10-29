import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from '../configureStore';

import { userGetTokenSuccess } from '../actions/user';

import App from './App';
import MyTrip from './pages/MyTrip';


const store = configureStore();

export default class Root extends Component {

    checkAuthentication(nextState, replace) {
        // here we check if auth-token present in localStorage, if not then redirect to login page.

        var auth_token = window.localStorage.getItem('auth_token');
        if (auth_token) {
            // authenticated...
            store.dispatch(userGetTokenSuccess({token: auth_token}));
        } else {
            // redirect to login
            replace('/login');
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App} onEnter={this.checkAuthentication}>
                        <Route path="foo0" component={MyTrip}/>
                        <Route path="foo1" component={MyTrip}/>
                        <Route path="foo2" component={MyTrip}/>
                        <Route path="foo3" component={MyTrip}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
