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

 type State = {
     open: boolean,
 }

class NavigationContainer extends Component {
    state: State

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    componentWillMount() { console.log(this.props.loadTrips(), typeof this.props.loadTrips);this.props.loadTrips() }
    handleNewTripClick() { this.setState({open: true}) }

    render() {
        const { trips, createTrip, getTrip } = this.props

        // TODO: make this universal across all Auth0 types
        const user_name: string = localStorage.getItem('name') || 'Foo Bar'
        return (
            <div>
                <Navigation onNewTripClick={this.handleNewTripClick.bind(this)} onSelectTrip={getTrip} trips={trips} fullName={user_name} />
                <NewTrip open={this.state.open} onSubmit={createTrip} />
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
