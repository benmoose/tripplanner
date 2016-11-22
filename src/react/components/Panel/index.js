/* @flow */
'use strict'

import React, { Component } from 'react'

import styles from './styles/panel.scss'


type Props = {
    children: Element,
    style?: Object,
}

export default function Panel({children, ...props}: Props) {
    return <div className={styles.panel} {...props}>{children}</div>
}
