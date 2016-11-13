import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTrip } from '../../actions/trip'

import Map from '../../components/map/'
import Itinerary from '../../components/itinerary/'


class MyTrip extends Component {

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
