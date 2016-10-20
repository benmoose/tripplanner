import React, {Component} from 'react';

import styles from './styles/itinerary.scss';


export default class Itinerary extends Component {
    render() {
        const {trip_locations} = this.props;

        var itineraryItems = trip_locations.map((item, i) => {
            return (<ItineraryItem key={i}
                                   location={item.title}
                                   arriveTime={item.arrive}
                                   departTime={item.depart}
                                   travelType={item.travel_type}
                                   travelIcon={item.travel_icon}
                                   destinationLocation="Destination"
                                   travelDuration="8 Hours"/>);  // #
        });

        return (
            <div className={styles.itinerary}>
                {itineraryItems}
            </div>
        );
    }
}


class ItineraryItem extends Component {
    render() {
        const { location, arriveTime, departTime,
            travelType, travelIcon, destinationLocation, travelDuration } = this.props;
        return (
            <div>
                <div className={styles.itineraryitem}>
                    {arriveTime ? <p>Arrive in <strong>{location}</strong> on <strong>{arriveTime}</strong>.</p> : null}
                    {departTime ? <p>Depart <strong>{location}</strong> on <strong>{departTime}</strong>.</p> : null}
                </div>

                {travelType && destinationLocation ?
                <ItineraryTravel travelType={travelType}
                                 travelIcon={travelIcon}
                                 originLocation={location}
                                 destinationLocation={destinationLocation}
                                 travelDuration={travelDuration}
                /> : null}
            </div>
        );
    }
}


class ItineraryTravel extends Component {
    render() {
        const { travelType, travelIcon, originLocation, destinationLocation, travelDuration } = this.props;
        return (
            <div className={styles.itinerarytravel}>
                <div className={styles.itinerarytravel__line}></div>

                <div className={styles.itinerarytravel__detail}>
                    <p className={styles.itinerarytravel__detail__item}>
                        <i className={`fa ${travelIcon}`} aria-hidden="true"></i>
                        {travelType} from <strong>{originLocation}</strong> to <strong>{destinationLocation}</strong>
                    </p>
                    {travelDuration ? <p className={styles.itinerarytravel__detail__time}>{travelDuration}</p> : null}
                </div>
            </div>
        );
    }
}
