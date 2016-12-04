/* @flow */
'use strict'


import React, {Component} from 'react'
import styles from './styles/location.scss'


type Props = {
    title: string,
}

export default class Location extends Component {
    props: Props

    render() {
        const { title } = this.props

        return (
            <div className={styles.container}>
                <figure className={styles.header}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                    </div>
                </figure>
                <p>Bucket List Here</p>
            </div>
        )
    }
}