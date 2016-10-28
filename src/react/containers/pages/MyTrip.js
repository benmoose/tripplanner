import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/map/';


class MyTrip extends Component {

    render() {
        const { loading, locations } = this.props;
        return (
            <div>
                <Map locations={locations.map(item => { return item.title })}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {locations, loading} = state.trip;
    return {
        locations,
        loading,
    };
}

export default connect(
    mapStateToProps,
)(MyTrip);
