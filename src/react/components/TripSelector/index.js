/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import styles from './styles/tripSelector.scss'
import * as T from '../../types/'


/*
 * Prop Types
 */

type Props  = {
    trips: Array<T.TripSimple>,
    onSelectTrip: Function,
    onNewTripClick: Function,
}


/*
 * Component
 */

export default class TripSelector extends Component {
    props: Props;

    handleChange(e) {
        this.props.onSelectTrip(e.target.value)
    }

    handleNewTripClick(e) {
        this.props.onNewTripClick()
        e.preventDefault()
    }

    render() {
        const { trips } = this.props;

        var options = trips.map((item, i) => {
            return <option key={i} value={item.uuid}>{item.title}</option>
        });

        return (
            <select className={styles.selector} onChange={this.handleChange}>
                {options}
                <option key="_newtrip" onClick={this.handleNewTripClick}>New Trip</option>
            </select>
        );
    }
}
