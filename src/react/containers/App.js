/*
* Application Container
* */

import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';

import { getTrips } from '../actions/trips';
import { getTrip } from '../actions/trip';

import Navigation from '../components/Navigation/';
import Sidemenu from '../components/sidemenu/';
import Window from '../components/window/';


class App extends Component {

    render() {
        const { isAuthenticating, isAuthenticated, trips, onSelectTrip, params } = this.props;

        // add auth instance from route to children
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth,
            })
        }

        return (
            <div>
                <Navigation onSelectTrip={onSelectTrip} trips={trips} fullName={'Foo Bar'}/>
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
        onLoadTrips: () => dispatch(getTrips()),
        onSelectTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

function mapStateToProps(state) {
    const { isAuthenticating, isAuthenticated } = state.user;
    const { trips } = state.trips;
    return {
        isAuthenticating,
        isAuthenticated,
        trips,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
