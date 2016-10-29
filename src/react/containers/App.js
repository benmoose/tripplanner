/*
* Application Container (Authenticated User's Only)
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
    // componentWillMount() {
    //     this.props.getUserToken('ben', 'tripplanner');
    // }

    render() {
        const { fullName, authenticating, loading, trips, onSelectTrip, params } = this.props;

        return (
            <div>
                <Navigation onSelectTrip={onSelectTrip} trips={trips} fullName={fullName}/>
                <Sidemenu/>
                <Window>
                    {this.props.children || <button onClick={() => {this.props.onLoadUser(); this.props.onLoadTrips()}}>Load State</button>}
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
