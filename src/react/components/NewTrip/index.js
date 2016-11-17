/* @flow */
'use strict'

/*
* Imports
*/

import React, { Component, PropTypes as T } from 'react'
import Modal from '../Modal/'
import styles from './styles/newTrip.scss'
const classnames = require('classnames')


/*
* Component
*/

type Props = {
    onSubmit: Function,
}

type State = {
    title: string,
    validation_error: boolean,
}

export default class NewTrip extends Component {
    props : Props
    state : State

    constructor(props: Props) {
        super(props)
        this.state = {
            title: '',
            validation_error: true,
        }

        /* TODO
         * Unfortunately, must set `self: any` var due to Flow having issues
         * with binding functions in constructor.
         * Consider using ES2015+ (Stage 0) Class Properties here as a
         * workaround.
         * More info @ Flow issue #1545.
         */
        const self: any = this
        self.handleChange = this.handleChange.bind(this)
        self.handleSubmit = this.handleSubmit.bind(this)
    }

    openModal() {
        this.modal.open()
    }

    handleChange(e) {
        const title = e.target.value
        this.setState({title: title})
        this.validateTitle(title)
    }

    handleSubmit(e) {
        if (!this.state.validation_error) {
            this.props.onSubmit(this.state.title)
        }
    }

    validateTitle(title: string) {
        // simple check to ensure title isn't empty
        const validation_error = title.length === 0
        this.setState({validation_error})
    }

    render() {
        var { title, validation_error } = this.state

        return (
            <Modal title="Create Trip" buttonText="Create" onClick={this.handleSubmit} ref={el => this.modal = el}>
                <input onChange={this.handleChange}
                       type="text"
                       value={title}
                       className={classnames(styles.input, {'error': validation_error})} />
            </Modal>
        )
    }
}
