import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken, getUser } from '../actions/user';

import Navigation from '../components/navigation';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(getUserToken('ben', 'tripplanner'));
    }

    handleClick() {
        this.forceUpdate();
    }

    render() {
        const {auth, authenticating, error, fullName, params } = this.props;

        return (
            <div>
                <Navigation/>
                <h1>Hello, {fullName}</h1>
                <p>Authenticating: {authenticating.toString()} | {auth}</p>
                <button onClick={this.handleClick.bind(this)}>Force Render</button>
                {auth ? <button onClick={() => this.props.dispatch(getUser(auth))}>Get User Details</button> : null}
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { authenticating, auth, error, full_name } = state.user;
    return {
        auth: auth,
        authenticating: authenticating,
        error: error,
        fullName: full_name,
    };
}

export default connect(mapStateToProps)(App);
