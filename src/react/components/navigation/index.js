import React, { Component } from 'react';

import styles from './styles/navigation.scss';


export default class Navigation extends Component {
    render() {
        return (
            <nav className={`${styles.navigation}`}>
                <div className={`${styles.navigation__brand}`}>
                    <a href="#">TripPlanner</a>
                </div>
                <div className={`${styles.navigation__trip}`}>
                    <span className={`${styles.navigation__trip__title}`}>Foo Bar</span>
                    <span className={`${styles.navigation__trip__countdown}`}>24 days left</span>
                </div>
                <ul className={`${styles.navigation__profile}`}>
                    <li className={`${styles.navigation__link}`}>
                        <a className={`${styles.navigation__link__a}`} href="#">
                            Foo Bar <i className="fa fa-chevron-down"></i>
                        </a>
                    </li>
                </ul>
            </nav>

        );
    }
}
