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
    title: string,
    subtitle?: string,
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
        this.state = { open: true }

        /* TODO
         * Unfortunately, must set `self: any` var due to Flow having issues
         * with binding functions in constructor.
         * Consider using ES2015+ (Stage 0) Class Properties here as a
         * workaround.
         * More info @ Flow issue #1545.
         */
        const self: any = this
        self.open = this.open.bind(this)
        self.close = this.close.bind(this)
        self.handleClick = this.handleClick.bind(this)
    }

    open() { this.setState({open: true}) }
    close() { this.setState({open: false}) }

    handleClick() {
        this.props.onClick()
        this.close()
    }

    render() {
        const { title, subtitle, children, buttonText } = this.props

        return (
            <div className={styles.container + ` ${this.state.open ? styles.open : ''}`}>
                <div className={styles.modal__wrapper}>
                    <div className={styles.modal} role="dialog">
                        <header className={styles.header}>
                            <h2>{title}</h2>
                            <h6>What shall we call your new trip?</h6>
                        </header>

                        <div className={styles.body}>{children}</div>

                        <footer className={styles.footer}>
                            <LinkButton onClick={this.close}>Close</LinkButton>
                            <Button onClick={this.handleClick}>{buttonText}</Button>
                        </footer>
                    </div>
                </div>
                <div className={styles.overlay} onClick={this.close} />
            </div>
        )
    }
}
