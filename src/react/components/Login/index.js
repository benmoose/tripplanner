import React, { Component, PropTypes as T } from 'react';

import AuthService from '../../utility/AuthService';
import Button from '../Button/';

import styles from './styles/login.scss';


export default class Login extends Component {
    static propTypes = {
        auth: T.instanceOf(AuthService),
    };

    render() {
        const { auth } = this.props;
        return (
            <div className={styles.login}>
                <h2>Login</h2>
                <Button onClick={auth.login.bind(this)}>Login</Button>
            </div>
        );
    }
}
