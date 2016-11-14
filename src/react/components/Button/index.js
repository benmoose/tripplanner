/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Component } from 'react';
import styles from './styles/button.scss';


/*
 * Component
 */

type Props = {
    onClick: Function,
    children: React$Element<any>,
}

export function Button({onClick, children}: Props) {
    return <button onClick={onClick} className={styles.btn}>{children}</button>
}

export function LinkButton({onClick, children}: Props) {
    return <button onClick={onClick} className={styles.link_btn}>{children}</button>
}
