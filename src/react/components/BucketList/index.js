/* @flow */
'use strict'

import React, { Component } from 'react'
import styles from './styles/bucketlist.scss'
import BucketListItem from '../BucketListItem/'


export default class BucketList extends Component {
    render() {
        const { items } = this.props

        const listItems = items.map((item, i) => {
            return <BucketListItem key={i} title={item.title}/>
        })

        return (
            <div className={styles.container}>
                {listItems}
            </div>
        )
    }
}
