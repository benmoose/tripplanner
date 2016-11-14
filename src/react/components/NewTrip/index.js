'use strict'

/*
 * Imports
 */

import React, { Component, PropTypes as T } from 'react'
import styles from './styles/newTrip.scss'


/*
 * Component
 */

export default class NewTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {title: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        console.log('title changed')
        this.setState({title: e.target.value})
    }

    handleSubmit(e) {
        console.log('handle submit')
        this.props.onClick(this.state.title)
        e.preventDefault()
    }

    render () {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input className={styles.form__input} type="text" value={this.state.title} onChange={this.handleChange} />
                <input type="submit" value="Create" />
            </form>
        )
    }
}

NewTrip.propTypes = {
    onClick: T.func,
}
