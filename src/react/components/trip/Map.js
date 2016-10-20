import React, { Component } from 'react';

import styles from './styles/map.scss';


export default class Map extends Component {
    render() {
        const props = Object.assign({
            locations: [],
        }, this.props);

        var origin = undefined, waypoints = undefined, destination = undefined;

        if (props.locations.length >= 2) {
            origin = props.locations[0];
            waypoints = props.locations.slice(1,-1);
            destination = props.locations[props.locations.length-1];
        }

        const apiKey = 'AIzaSyC4ysxYvlgZfqItrZ2qB-_d8GuniL6ZvFU';
        var googleApi = origin && destination ?
            encodeURI(`https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${origin}${waypoints.length ? `&waypoints=${waypoints.join('|')}` : ''}&destination=${destination}&units=metric`) :
            encodeURI(`https://www.google.com/maps/embed/v1/view?key=${apiKey}&zoom=2&center=51.5074,0.1278`);

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
