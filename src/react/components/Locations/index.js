/* @flow */
'use strict'


import React, {Component} from 'react'
import styles from './styles/locations.scss'
import Location from '../Location/'


export default class Locations extends Component {
    render() {
        const { locations } = this.props

        const locationElements = locations.map((item, i) => {
            return <Location key={i} title={item.title} bucket_list_items={item.bucket_list}/>
        })

        return (
            <div className={styles.container}>
                {locationElements}
            </div>
        )
    }
}
