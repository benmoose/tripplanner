/* @flow */
'use strict'

import React, { Component } from 'react'
import styles from './styles/bucketlistitem.scss'

type Props = {
    title: string,
}


export default class BucketListItem extends Component {
    render() {
        const { title } = this.props

        return (
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                <div className={styles.votes}>
                    <span>3 --</span>
                </div>
            </div>
        )
    }
}
