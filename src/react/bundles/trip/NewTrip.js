import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NewTrip from '../../components/trip/NewTrip';


class NewTripComponent extends Component {
    render() {
        return (
            <NewTrip/>
        );
    }
}

ReactDOM.render(<NewTripComponent/>, document.getElementById('rm-newTrip'));
