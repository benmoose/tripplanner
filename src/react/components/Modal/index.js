/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import { LinkButton } from '../Button/'
import styles from './styles/modal.scss'


/*
 * Component
 */

type Props = {
    title: ?string,
    children: React$Element<any>,
    actionButton: ?Element<any>,
}

 type State = {
     open: boolean,
 }

export default class Modal extends Component {
    props : Props
    state : State

    constructor(props: Props) {
        super(props)
        this.state = {open: false}
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.modal} role="dialog">
                    <header className={styles.header}></header>
                    <div className={styles.body}></div>
                    <footer className={styles.footer}>
                        <LinkButton onClick={() => alert('clicked')}>Close</LinkButton>
                    </footer>
                </div>
                <div className={styles.overlay}></div>
            </div>
        )
    }
}
