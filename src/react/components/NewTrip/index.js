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
        this.state = {title: '', validation_error: true}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        let {title, validation_error} = this.state
        return (
            <Modal title="Create Trip" buttonText="Create" onClick={this.handleSubmit}>
                <div className={styles.container}>
                    <input onChange={this.handleChange}
                           type="text"
                           value={title}
                           className={classnames(styles.input, {'error': validation_error})} />
                </div>
            </Modal>
        )
    }
}
