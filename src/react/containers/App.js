import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken } from '../actions/user';

import Navigation from '../components/navigation/';
import Sidemenu from '../components/sidemenu/';
import Window from '../components/window/';


class App extends Component {
    componentWillMount() {
        this.props.dispatch(getUserToken('ben', 'tripplanner'));
    }

    render() {
        const { fullName, authenticating, loading, trips, params } = this.props;

        return (
            <div>
                <Navigation fullName={fullName}/>
                <Sidemenu/>
                <Window>
                    {this.props.children || <p>Default UI</p>}
                </Window>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { authenticating, full_name } = state.user;
    const { trips, loading } = state.trips;
    return {
        fullName: full_name,
        authenticating,
        loading,
        trips,
    };
}

export default connect(mapStateToProps)(App);
