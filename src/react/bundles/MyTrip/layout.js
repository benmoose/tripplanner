import React, { Component } from 'react';

import Map from '../../components/trip/Map';
import Itinerary from '../../components/trip/Itinerary';

import { TRIPDETAIL } from '../../api/endpoints';


export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: undefined,
        }
    }

    getTripDetails() {
        var pathname = window.location.pathname;
        fetch(TRIPDETAIL(pathname))
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
        return (
            <div>
                <Map/>
                <div className="page-container">
                    <Itinerary {...this.state.trip}/>
                </div>
            </div>
        );
    }
}
