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
        let {title, validation_error} = this.state
        return (
            <div>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}
                           type="text"
                           value={title}
                           className={classnames(styles.input, {'error': validation_error})}/>

                    <input className={classnames(styles.submit, {'disabled': validation_error})}
                           type="submit"
                           value="Create"/>
                </form>
            </div>
        )
    }
}

NewTrip.propTypes = {
    onSubmit: T.func.isRequired,
}
