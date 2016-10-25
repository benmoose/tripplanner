import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken, getUser } from '../actions/user';

import Navigation from '../components/navigation';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(getUserToken('ben', 'tripplanner'));
    }

    render() {
        const { authenticating, fullName, params } = this.props;

        return (
            <div>
                <Navigation/>
                <h1>Hello, {fullName}</h1>
                <p>Authenticating: {authenticating.toString()}</p>
                <button onClick={() => this.props.dispatch(getUser())}>Get User Details</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { authenticating, auth, error, full_name } = state.user;
    return {
        authenticating: authenticating,
        fullName: full_name,
    };
}

export default connect(mapStateToProps)(App);
