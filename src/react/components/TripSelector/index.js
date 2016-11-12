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

    handleChange(e: Event): void {
        this.props.onSelectTrip(e.target.value)
    }

    handleNewTripClick(e: Event): void {
        e.preventDefault()
        this.props.onNewTripClick()
    }

    render() {
        const { trips } = this.props;

        var options = trips.map((item, i) => {
            return <option key={i} value={item.uuid}>{item.title}</option>
        });

        return (
            <select className={styles.selector} onChange={this.handleChange.bind(this)}>
                {options}
                <option key="newtrip" onClick={this.handleNewTripClick.bind(this)}>New Trip</option>
            </select>
        );
    }
}
