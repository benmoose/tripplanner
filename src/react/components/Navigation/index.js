/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

import TripSelector from '../tripSelector'
import styles from './styles/navigation.scss'
import * as T from '../../types/'


/*
 * Component
 */

 type Props = {
     fullName: string,
     trips: Array<T.TripSimple>,
     onSelectTrip: Function,
     onNewTripClick: Function,
 }

export default class Navigation extends Component {
    props: Props

    render() {
        const { fullName, trips, onSelectTrip } = this.props;

        return (
            <nav className={`${styles.navigation}`}>
                <div className={`${styles.brand}`}>
                    <Link to="/">TripPlanner</Link>
                </div>

                <div className={`${styles.trip}`}>
                    <TripSelector onSelectTrip={onSelectTrip} trips={trips}/>
                    <span className={`${styles.trip__countdown}`}>_x_ days left!</span>
                </div>

                <ul className={`${styles.profile}`}>
                    <li className={`${styles.link}`}>
                        <a className={`${styles.link__a}`} href="#">
                            {fullName} <i className="fa fa-chevron-down"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
