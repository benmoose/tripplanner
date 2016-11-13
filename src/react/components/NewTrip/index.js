/* @flow */
'use strict'


/*
 * Imports
 */

import React, { Component } from 'react'
import styles from './styles/newTrip.scss'


/*
 * Prop Types
 */

type Props = {
    onClick: Function,
}


/*
 * Component
 */

export default class NewTrip extends Component {
    render () {
        return (
            <form className={styles.form}>
                <input className={styles.form__input} type="text" name="title" placeholder="Trip title"/>
                <button type="submit">Create</button>
            </form>
        )
    }
}
 