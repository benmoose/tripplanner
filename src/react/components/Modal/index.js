/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import styles from './styles/modal.scss'


/*
 * Component
 */

export default class Modal extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.modal} role="dialog">
                    <header className={styles.header}></header>
                    <div className={styles.body}></div>
                    <footer className={styles.footer}></footer>
                </div>
                <div className={styles.overlay}></div>
            </div>
        )
    }
}
