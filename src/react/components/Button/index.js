import React, { Component, PropTypes as T } from 'react';

import styles from './styles/button.scss';


export default class Button extends Component {
    static propTypes = {
        onClick: T.func.isRequired,
    };

    render() {
        const { children, onClick } = this.props;
        return (
            <button onClick={onClick} className={styles.btn}>{children}</button>
        );
    }
}
