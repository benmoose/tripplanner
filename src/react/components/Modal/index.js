/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import { Button, LinkButton } from '../Button/'
import styles from './styles/modal.scss'


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
        this.state = {open: false}
    }

    render() {
        const { onClick, buttonText, children } = this.props

        return (
            <div className={styles.container}>
                <div className={styles.modal} role="dialog">
                    <header className={styles.header}></header>
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
