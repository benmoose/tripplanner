/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import styles from './styles/tripSelector.scss'
import * as T from '../../types/'


/*
 * Component
 */

type Props  = {
    trips: Array<T.TripSimple>,
    onSelectTrip: Function,
    onNewTripClick: Function,
}

export default class TripSelector extends Component {
    props: Props

    handleSelectTrip(e) {
        // conditionally handle change based on if New Trip was selected
        if (e.target.selectedIndex === e.target.options.length - 1 ) {
            this.props.onNewTripClick()
        } else {
            this.props.onSelectTrip(e.target.options[e.target.selectedIndex].value)
        }
    }

    render() {
        const { trips } = this.props
        const tripOptions = trips.map((trip, i) => {
            return <option key={i} value={trip.uuid}>{trip.title}</option>
        })

        return (
            <select className={styles.selector} onChange={this.handleSelectTrip.bind(this)}>
                {tripOptions}
                <option key="_newtrip">New Trip</option>
            </select>
        )
    }
}
