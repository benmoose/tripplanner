/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTrip } from '../actions/trip'

import Panel from '../components/Panel/'
import Map from '../components/map/'
import Itinerary from '../components/itinerary/'
import TodoList from '../components/TodoList/'


class MyTrip extends Component {

    render() {
        const { loading, locations } = this.props;
        return (
            <div>
                <Map locations={locations.map(item => { return item.title })}/>

                <Panel>
                    <Itinerary locations={locations}/>
                </Panel>
                <Panel>
                    <TodoList todos={[{title: 'todo 1', completed: false}, {title: 'todo 2', completed: true}]}/>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { locations, loading } = state.trip;
    return {
        locations,
        loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTrip: (uuid) => dispatch(getTrip(uuid)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyTrip);
