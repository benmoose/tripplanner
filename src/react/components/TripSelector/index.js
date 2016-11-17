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

    handleChange(e) {
        this.props.onSelectTrip(e.target.value)
    }

    handleNewTripClick(e) {
        this.props.onNewTripClick()
        e.preventDefault()
    }

    render() {
        const { trips } = this.props
        var tripOptions = trips.map((trip, i) => {
            return <option key={i} value={trip.uuid}>{trip.title}</option>
        })

        return (
            <select className={styles.selector} onChange={this.handleChange}>
                {tripOptions}
                <option key="_newtrip" onClick={this.handleNewTripClick}>New Trip</option>
            </select>
        )
    }
}
