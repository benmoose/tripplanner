/* @flow */
'use strict'

import React, { Component } from 'react'
import styles from './styles/bucketlistitem.scss'

import EmojiVote from '../EmojiVote/'

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
                    <EmojiVote code="0x1F604" count={5}/>
                    <EmojiVote code="U+1F60B" count={5}/>
                </div>
            </div>
        )
    }
}
