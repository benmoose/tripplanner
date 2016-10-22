import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTrips } from '../actions/trips';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(getTrips())
    }

    render() {
        const { loading, trips, error, params } = this.props;

        const tripsList = trips.map((trip, i) => {
            return <li key={i}>{trip.title} ({trip.trip_locations.length} locations)</li>;
        });

        return (
            <div>
                <p><strong>loading</strong> {loading.toString()}</p>
                <ul>{tripsList}</ul>
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
