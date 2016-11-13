/*
 * @flow
 *
 * Application Container with navigation and sidebar
 *
 * */

import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'

import { getTrips } from '../actions/trips'
import { getTrip } from '../actions/trip'

import Navigation from '../components/Navigation/'
import Sidemenu from '../components/sidemenu/'
import Window from '../components/window/'


class App extends Component {

    componentWillMount() {
        // get list of users trips
        this.props.loadTrips()
        // populate app with specific trip
        this.props.getTrip('b58b206d-ec0b-4194-845c-73e9f7b877ae')
    }

    render() {
        const { trips, getTrip, params } = this.props

        // add auth instance from route to children
        let children = null
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth,
            })
        }

        return (
            <div>
                <Navigation onSelectTrip={getTrip} trips={trips} fullName={'Foo Bar'}/>
                <Sidemenu/>
                <Window>
                    {children}
                </Window>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        loadTrips: () => dispatch(getTrips()),
        getTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

function mapStateToProps(state) {
    const { trips } = state.trips;
    return {
        trips,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
