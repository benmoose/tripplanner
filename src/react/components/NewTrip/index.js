'use strict'

/*
 * Imports
 */

import React, { Component, PropTypes as T } from 'react'
import styles from './styles/newTrip.scss'
var classnames = require('classnames')


/*
 * Component
 */

export default class NewTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {title: '', validation_error: true,}
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
        e.preventDefault()
    }

    validateTitle(title) {
        // simple check to ensure title isn't empty
        const validation_error = title.length === 0
        this.setState({validation_error})
    }

    render() {
        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}
                       type="text"
                       value={this.state.title}
                       className={classnames(styles.input, {'error': this.state.validation_error})} />
                <input className={styles.submit} type="submit" value="Create" />
            </form>
        )
    }
}

NewTrip.propTypes = {
    onSubmit: T.func.isRequired,
}
