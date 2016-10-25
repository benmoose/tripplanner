import React, { Component } from 'react';

import styles from './styles/entryButtons.scss';


export default class TripSelector extends Component {

    render() {
        const {trips} = this.props;

        var tripButtons = <ul>
            {trips.map((trip, i) => {
                return <li key={i}>{trip.title} <a href={trip.get_absolute_url}>Go</a></li>
            })}
        </ul>;

        return (
            <div className={styles.buttons}>
                <a>+ New Trip</a>
                {tripButtons}
            </div>
        );
    }
}
