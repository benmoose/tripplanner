import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken, getUser } from '../actions/user';
import { getTrips } from '../actions/trips';

import Navigation from '../components/navigation';
import TripSelector from '../components/dashboard/TripSelector';


class App extends Component {
    componentWillMount() {
        this.props.dispatch(getUserToken('ben', 'tripplanner'));
    }

    render() {
        const { authenticating, fullName, trips, loading, params } = this.props;

        return (
            <div>
                <Navigation fullName={fullName}/>
                <p>Authenticating: {authenticating.toString()}</p>
                <p>Loading Trips: {loading.toString()}</p>
                <button onClick={() => this.props.dispatch(getUser())}>Get User Details</button>
                <button onClick={() => this.props.dispatch(getTrips())}>Get Trips</button>
                <TripSelector trips={trips}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { authenticating, full_name } = state.user;
    const { trips, loading } = state.trips;
    return {
        authenticating: authenticating,
        fullName: full_name,
        trips: trips,
        loading: loading,
    };
}

export default connect(mapStateToProps)(App);
