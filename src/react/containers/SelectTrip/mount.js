import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Layout from './layout';


class SelectTrip extends Component {
    render() {
        return <Layout/>;
    }
}

ReactDOM.render(<SelectTrip/>, document.getElementById('rm-SelectTrip'));
