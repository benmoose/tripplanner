import React, {Component} from 'react';

import Map from '../../components/trip/Map';
import Itinerary from '../../components/trip/Itinerary';

import { TRIP_DETAIL } from '../../constants/endpoints';


export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: undefined,
        }
    }

    getTripDetails() {
        var pathname = window.location.pathname;
        fetch(TRIP_DETAIL(pathname))
            .then(response => {
                return response.json();
            })
            .then(json => this.setState({
                trip: json,
            }));
    }

    componentWillMount() {
        this.getTripDetails();
    }

    render() {
        var trip = Object.assign({
            trip_locations: [],
        }, this.state.trip);

        var locations_array = trip.trip_locations.map(location => {
            return location.title;
        });

        return (
            <div>
                <Map locations={locations_array}/>

                <div className="page-container">
                    <Itinerary {...trip}/>
                </div>
            </div>
        );
    }
}
