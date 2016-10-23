import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken, getUser } from '../actions/user';

import Navigation from '../components/navigation';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(getUserToken('ben', 'tripplanner'));
    }

    render() {
        this.props.dispatch(getUser(this.props.auth));
        const {auth, authenticating, error, fullName, params } = this.props;

        return (
            <div>
                <Navigation/>
                <h1>Hello {fullName}</h1>
                <p>Authenticating: {authenticating.toString()} | {auth}</p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { authenticating, auth, error } = state.user;
    const { fullName } = state.user;
    return {
        auth: auth,
        authenticating: authenticating,
        error: error,
    };
}

export default connect(mapStateToProps)(App);
