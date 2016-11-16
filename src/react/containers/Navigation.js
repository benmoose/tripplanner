/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTrips } from '../actions/trips'
import { getTrip, tripCreate } from '../actions/trip'

import Navigation from '../components/Navigation/'
import NewTrip from '../components/NewTrip/'


/*
 * Component
 */

class NavigationContainer extends Component {

    componentWillMount() {
        this.props.loadTrips()
    }

    render() {
        const { trips, createTrip, getTrip } = this.props

        // TODO: make this universal across all Auth0 types
        const user_name = localStorage.getItem('name')
        return (
            <div>
                <Navigation onSelectTrip={getTrip} trips={trips} fullName={user_name} />
                <NewTrip open={true} onSubmit={createTrip} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadTrips: () => dispatch(getTrips()),
        getTrip: (uuid) => dispatch(getTrip(uuid)),
        createTrip: (title) => dispatch(tripCreate(title)),
    }
}

function mapStateToProps(state) {
    const { trips } = state.trips;
    return {
        trips,
    }
}

// create container
export default connect(
    // mapDispatchToProps,
    // mapStateToProps,
)(NavigationContainer)
