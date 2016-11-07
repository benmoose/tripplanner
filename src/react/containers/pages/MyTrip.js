import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTrip } from '../../actions/trip';
import { getTrips } from '../../actions/trips';

import Map from '../../components/map/';
import Itinerary from '../../components/itinerary/';


class MyTrip extends Component {
    componentWillMount() {
        this.props.getTrips();
        this.props.getTrip('b58b206d-ec0b-4194-845c-73e9f7b877ae');
    }

    render() {
        const { loading, locations } = this.props;
        return (
            <div>
                <Map locations={locations.map(item => { return item.title })}/>
                <Itinerary locations={locations}/>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
        getTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

function mapStateToProps(state) {
    const { locations, loading } = state.trip;
    return {
        locations,
        loading,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyTrip);
