import React, {Component} from 'react';

import styles from './styles/itinerary.scss';


export default class Itinerary extends Component {
    render() {
        var props = Object.assign({
            get_trip_locations: [],
            origin_title: undefined,
            destination_title: undefined,
        }, this.props);

        var itineraryItems = props.get_trip_locations.map((item, i) => {
            return (<ItineraryItem key={i}
                                   location={item.title}
                                   arriveTime={item.arrive}
                                   departTime={item.depart}
                                   travelType="Flight"
                                   originLocation="Stockholm"
                                   travelTime="8 Hours"
            />);
        });

        return (
            <div className={styles.itinerary}>
                <h6>{props.origin_title}</h6>
                {itineraryItems}
                <h6>{props.destination_title}</h6>
            </div>
        );
    }
}


class ItineraryItem extends Component {
    render() {
        const {location, arriveTime, departTime, travelType, originLocation, destinationLocation, travelTime} = this.props;
        return (
            <div>
                <div className={styles.itineraryitem}>
                    {arriveTime ?
                        <p>Arrive in <strong>{location}</strong> on <strong>{arriveTime}</strong>.</p> : null}
                    {departTime ?
                        <p>Depart <strong>{location}</strong> on <strong>{departTime}</strong>.</p> : null}
                </div>
                {originLocation ?
                    <ItineraryTravel travelType={travelType}
                                     originLocation={originLocation}
                                     destinationLocation={destinationLocation}
                                     travelTime={travelTime}/> : null}
            </div>
        );
    }
}


class ItineraryTravel extends Component {
    render() {
        const {travelType, originLocation, destinationLocation, travelTime} = this.props;
        return (
            <div className={styles.itinerarytravel}>
                <div className={styles.itinerarytravel__line}></div>
                <div className={styles.itinerarytravel__detail}>
                    <p className={styles.itinerarytravel__detail__item}>
                        {travelType} from <strong>{originLocation}</strong>
                    </p>
                    {travelTime ? <p className={styles.itinerarytravel__detail__time}>{travelTime}</p> : null}
                </div>
            </div>
        );
    }
}
