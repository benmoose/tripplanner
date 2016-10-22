import React, { Component } from 'react';
import { connect } from 'react-redux';

import { store } from '../../store';
import { getTrips } from '../../actions/trips';


const mapStateToProps = (state) => {
    return {
        loading: state.trips.loading,
        trips: state.trips.trips,
        error: state.trips.error,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrips: () => store.dispatch(getTrips()),
    }
};

class _App extends Component {

    render() {
        const {loading, trips, error, getTrips} = this.props;

        const tripsList = trips.map((trip, i) => {
            return <li key={i}>{trip.title} <a href={trip.get_absolute_url}>Go to</a></li>;
        });

        return (
            <div>
                <p>Loading: {loading.toString()}</p>
                <ul>trips: {tripsList}</ul>
                <p>error: {error}</p>
                <button onClick={getTrips}>Get trips</button>
            </div>
        );
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_App);

export default App;
