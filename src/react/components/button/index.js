import React, { Component } from 'react';

import styles from './styles/button.scss';


export default class Button extends Component {
    render() {
        const { children } = this.props;
        return (
            <button className={styles.btn}>{children}</button>
        );
    }
}
