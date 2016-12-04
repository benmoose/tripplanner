/* @flow */
'use strict'

import React, { Component } from 'react'
import styles from './styles/suggestions.scss'
const classnames = require('classnames')

export default class Suggestions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    render() {
        console.log('openClassName:', this.state.open)

        return (
            <div className={classnames(styles.container, {[`${styles.open}`]: this.state.open})}>
                <h4>Places in 'location'</h4>
                <ul>
                    <li>Suggestions here...</li>
                    <li>Suggestions here...</li>
                    <li>Suggestions here...</li>
                    <li>Suggestions here...</li>
                </ul>
            </div>
        )
    }
}
