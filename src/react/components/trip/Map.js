import React, { Component } from 'react';

import styles from './styles/map.scss';


export default class Map extends Component {
    render() {
        const { origin, destination, waypoints } = this.props;
        const props = Object.assign({
            origin: undefined,
            destination: undefined,
            waypoints: [],
        }, this.props);

        const apiKey = 'AIzaSyC4ysxYvlgZfqItrZ2qB-_d8GuniL6ZvFU';
        var googleApi = props.origin && props.destination ?
            `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${props.origin}${props.waypoints.length ? `&waypoints=${props.waypoints.join('|')}` : ''}&destination=${props.destination}&units=metric` :
            `https://www.google.com/maps/embed/v1/view?key=${apiKey}&zoom=2&center=51.5074,0.1278`;

        return (
            <div className={styles.map}>
                <iframe
                    className={styles.map__map}
                    width="650"
                    height="450"
                    frameBorder="0"
                    src={googleApi}>
                </iframe>
            </div>
        );
    }
}
