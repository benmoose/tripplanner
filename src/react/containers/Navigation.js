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

    componentWillMount() { this.props.loadTrips() }
    handleNewTripClick() { this.newtrip.openModal() }

    render() {
        const { trips, createTrip, getTrip } = this.props

        // TODO: make this universal across all Auth0 user types
        const user_name: string = localStorage.getItem('name') || 'Foo Bar'

        // TODO: check if there is a better way than refs to open the modal
        return (
            <div>
                <Navigation onNewTripClick={this.handleNewTripClick.bind(this)} onSelectTrip={getTrip} trips={trips} fullName={user_name} />
                <NewTrip onSubmit={createTrip} ref={el => this.newtrip = el} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        trips: state.trips.trips,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadTrips: () => dispatch(getTrips()),
        getTrip: (uuid) => dispatch(getTrip(uuid)),
        createTrip: (title) => dispatch(tripCreate(title)),
    }
}

// create container
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationContainer)
