import React, { Component } from 'react';

import styles from './styles/window.scss';


export default class Window extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.window}>
                <div className={styles.windowInner}>
                    {children}
                </div>
            </div>
        );
    }
}
