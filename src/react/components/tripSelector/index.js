import React, { Component } from 'react';


export default class TripSelector extends Component {
    handleChange(e) {
        this.props.onSelectTrip(e.target.value)
    }

    render() {
        const { trips } = this.props;

        var options = <select onChange={this.handleChange.bind(this)}>{trips.map((item, i) => {
            return <option key={i} value={item.uuid}>{item.title}</option>
        })}</select>;

        return (
            <div>
                {options}
            </div>
        );
    }
}
