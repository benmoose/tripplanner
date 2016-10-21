import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from './layout';


class MyTrip extends Component {
    render() {
        return <Layout/>;
    }
}

ReactDOM.render(<MyTrip/>, document.getElementById('rm-MyTrip'));
