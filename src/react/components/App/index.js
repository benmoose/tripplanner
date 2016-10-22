import React, { Component } from 'react';

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        age: state.user.age,
    }
};

class _App extends Component {
    render() {
        return <p>Hey {this.props.name} ({this.props.age} years old)</p>;
    }
}

const App = connect(
    mapStateToProps
)(_App);

export default App;
