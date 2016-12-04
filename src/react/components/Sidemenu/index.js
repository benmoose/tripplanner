/* @flow */
'use strict'

import React, { Component } from 'react'
import styles from './styles/sidemenu.scss'
import { MenuLink } from '../link/'


export default class Sidemenu extends Component {
    constructor(props) {
        super(props)
        this.links = [
            ['My Trip', 'fa-globe'],
            ['Todo List', 'fa-list-ul'],
            ['Itinerary', 'fa-plane'],
            ['Bucket List', 'fa-glass'],
        ]
    }

    urlize(title: string): string {
        return encodeURI(title).replace('%20', '').toLowerCase()
    }

    render() {
        let links = this.links.map((item, i) => {
            return <MenuLink key={i}
                             to={this.urlize(item[0])}
                             children={item[0]}
                             iconClass={item[1]}
            />
        })

        return (
            <div className={styles.sidemenu}>
                <div className={styles.sidemenu__brand}>
                    <h1 className={styles.sidemenu__brand__h1}>Tripplanner</h1>
                </div>

                <div className={styles.sidemenu__list}>
                    {links}
                </div>
            </div>
        )
    }
}
