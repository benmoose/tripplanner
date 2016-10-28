import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles/navigation.scss';


export default class Navigation extends Component {
    render() {
        const { fullName } = this.props;

        return (
            <nav className={`${styles.navigation}`}>
                <div className={`${styles.brand}`}>
                    <Link to="/">TripPlanner</Link>
                </div>

                <div className={`${styles.trip}`}>
                    <span className={`${styles.trip__title}`}>Foo Bar</span>
                    <span className={`${styles.trip__countdown}`}>24 days left!</span>
                </div>

                <ul className={`${styles.profile}`}>
                    <li className={`${styles.link}`}>
                        <a className={`${styles.link__a}`} href="#">
                            {fullName} <i className="fa fa-chevron-down"></i>
                        </a>
                    </li>
                </ul>
            </nav>

        );
    }
}
