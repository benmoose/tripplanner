import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from '../configureStore';
import App from './App';


const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/(:uuid)" component={App}/>
                </Router>
            </Provider>
        )
    }
}
