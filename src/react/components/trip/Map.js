import React, { Component } from 'react';

import styles from './styles/map.scss';


export default class Map extends Component {
    render() {
        return (
            <div className={styles.map}>
                <iframe
                    className={styles.map__map}
                    width="650"
                    height="450"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyC4ysxYvlgZfqItrZ2qB-_d8GuniL6ZvFU&origin=London,UK&waypoints=Boston|New%20York&destination=London,UK&units=metric">
                </iframe>
            </div>
        );
    }
}
