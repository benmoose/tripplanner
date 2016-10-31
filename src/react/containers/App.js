/*
* Application Container
* */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken, getUser } from '../actions/user';
import { getTrips } from '../actions/trips';
import { getTrip } from '../actions/trip';

import Navigation from '../components/navigation/';
import Sidemenu from '../components/sidemenu/';
import Window from '../components/window/';


class App extends Component {
    componentWillMount() {

    }

    render() {
        const { fullName, authenticating, loading, trips, onSelectTrip, params } = this.props;

        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth,  // add auth instance from route to children
            })
        }

        return (
            <div>
                <Navigation onSelectTrip={onSelectTrip} trips={trips} fullName={fullName}/>
                <Sidemenu/>
                <Window>
                    {children}
                </Window>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getUserToken: (username, password) => dispatch(getUserToken(username, password)),
        onLoadUser: () => dispatch(getUser()),
        onLoadTrips: () => dispatch(getTrips()),
        onSelectTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

function mapStateToProps(state) {
    const { authenticating, full_name } = state.user;
    const { trips, loading } = state.trips;
    return {
        fullName: full_name,
        authenticating,
        loading,
        trips,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
