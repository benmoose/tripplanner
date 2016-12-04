/* @flow */
'use strict'


import React, {Component} from 'react'
import styles from './styles/location.scss'
import BucketList from '../BucketList/'


type Props = {
    title: string,
}

export default class Location extends Component {
    props: Props

    render() {
        const { title, bucket_list_items } = this.props
        const items = bucket_list_items ? bucket_list_items.items : []

        return (
            <div className={styles.container}>
                <figure className={styles.header}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                    </div>
                </figure>
                <BucketList items={items}/>
            </div>
        )
    }
}