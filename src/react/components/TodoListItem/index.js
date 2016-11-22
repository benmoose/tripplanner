/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react'
import styles from './styles/todoListItem.scss'


/*
 * Component
 */

type Props = {
    title: string,
    completed: boolean,
}

export default function TodoListItem({title, completed}: Props) {
    return (
        <div className={styles.item}>
            <p>{title}</p>
            <small>{completed ? 'Complete' : 'Incomplete'}</small>
        </div>
    )
}
 