/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import { Link as _Link } from 'react-router'
import styles from './styles/link.scss'


/*
 * Component
 */

type Props = {
    to: string,
    children: Element<any>,
}

export function Link ({to, children}: Props) {
    return (
        <_Link className={styles.link} to={to}>
            {children}
        </_Link>
    )
}


export class MenuLink extends Component {
    render() {
        const { iconClass, to, className, children } = this.props;
        return (
            <_Link activeClassName={styles.active} className={styles.menulink} to={to}>
                <i className={`fa ${iconClass} ${styles.link__icon}`} />
                {children}
            </_Link>
        )
    }
}
