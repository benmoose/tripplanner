/* @flow */
'use strict'


import React, { Component } from 'react'
import styles from './styles/emojiVote.scss'


type Props = {
    code: string,
    count: number,
}

export default function EmojiVote({code, count}: Props) {
    let codePoint = code.replace('U', '0').replace('+', 'x')

    return (
        <div className={styles.container}>
            <span className={styles.emoji}>{String.fromCodePoint(codePoint)}</span>
            <span className={styles.count}>{count}</span>
        </div>
    )
}
