import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from '../configureStore';

import App from './App';
import MyTrip from './pages/MyTrip';


const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
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
