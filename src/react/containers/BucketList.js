/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTrip } from '../actions/trip'

import Locations from '../components/Locations/'
import Map from '../components/map/'
import Suggestions from '../components/Suggestions/'


class BucketList extends Component {

    render() {
        const { loading, locations } = this.props;

        return (
            <div>
                <Suggestions/>
                <Map locations={locations.map(item => { return item.title })}/>
                <Locations locations={locations}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { locations, loading, bucket_list } = state.trip;
    return {
        locations,
        loading,
        bucket_list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BucketList);
