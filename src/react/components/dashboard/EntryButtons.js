import React, { Component } from 'react';

import styles from './styles/entryButtons.scss';
import TripButton, { TripButtonWithCallback } from '../trip/TripButton';


export default class EntryButtons extends Component {

    render() {
        const { trips } = this.props;

        var tripButtons = trips.map((trip, i) => {
            console.log('trip', i, trip);
            return <TripButton key={i} text={trip.title} href={trip.get_absolute_url} image="http://images2.content-hca.com/commimg/myhotcourses/blog/post/myhc_16523.jpg"/>
        });

        return (
            <div className={styles.buttons}>
                <TripButtonWithCallback text="New Trip"
                                        image="http://images2.content-hca.com/commimg/myhotcourses/blog/post/myhc_16523.jpg"
                                        onClick={() => alert('clicked!')}
                                        icon={<i className="fa fa-plus"></i>}/>
                {tripButtons}
            </div>
        );
    }
}