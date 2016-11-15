/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import { Button, LinkButton } from '../Button/'
import styles from './styles/modal.scss'
const classnames = require('classnames')


/*
 * Component
 */

type Props = {
    title?: string,
    children?: React$Element<any>,
    buttonText: string,
    onClick: Function,
}

 type State = {
     open: boolean,
 }

export default class Modal extends Component {
    props : Props
    state : State

    constructor(props: Props) {
        super(props)
        this.state = {open: true}
    }

    render() {
        const { onClick, buttonText, children } = this.props

        return (
            <div className={styles.container + ` ${this.state.open ? styles.open : ''}`}>
                <div className={styles.modal} role="dialog">
                    <header className={styles.header}>
                        <h2 className={styles.header__h}>Modal Title</h2>
                    </header>

                    <div className={styles.body}>{children}</div>

                    <footer className={styles.footer}>
                        <LinkButton onClick={() => alert('clicked')}>
                            Close</LinkButton>
                        <Button onClick={onClick}>{buttonText}</Button>
                    </footer>
                </div>
                <div className={styles.overlay}></div>
            </div>
        )
    }
}
