/* @flow */
'use strict'


import React, {Component} from 'react'
import styles from './styles/locations.scss'
import Location from '../Location/'


export default class Locations extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Location title="London"/>
                <Location title="New York"/>
                <Location title="New York"/>
                <Location title="New York"/>
                <Location title="Boston"/>
            </div>
        )
    }
}
