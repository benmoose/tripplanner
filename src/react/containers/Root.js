import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AuthService from '../utility/AuthService'

import configureStore from '../configureStore'

import App from './App'
import Login from '../components/Login/'
import MyTrip from './MyTrip'
import Logout from '../components/Logout/'


const store = configureStore()
const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__)

// validate user for private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace('/login')
    } else {
        console.log('User logged in')
    }
}

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App} auth={auth}>
                        <Route path="foo0" component={Logout} onEnter={requireAuth}/>
                        <Route path="foo1" component={MyTrip} onEnter={requireAuth}/>
                        <Route path="foo2" component={MyTrip} onEnter={requireAuth}/>
                        <Route path="foo3" component={MyTrip} onEnter={requireAuth}/>
                        <Route path="login" component={Login}/>
                        <Route path="access_token=:token" component={Login}/> //to prevent router errors
                    </Route>
                </Router>
            </Provider>
        )
    }
}
