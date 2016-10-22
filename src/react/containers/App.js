import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTrips } from '../actions/trips';

// import { TripSelector } from '../components/dashboard/TripSelector';
import Navigation from '../components/navigation';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(getTrips())
    }

    render() {
        const { loading, trips, error, params } = this.props;

        return (
            <div>
                <Navigation/>
                <p>loading: {loading.toString()}</p>
                {trips.map((trip, i) => <p key={i}>{trip.title}</p>)}
                <p>uuid: {params.uuid}</p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { loading, trips, error } = state.trips;
    return {
        loading: loading,
        trips: trips,
        error: error,
    };
}

export default connect(mapStateToProps)(App);
