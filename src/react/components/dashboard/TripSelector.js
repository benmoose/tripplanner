import React, { Component } from 'react';

import styles from './styles/entryButtons.scss';


export default class TripSelector extends Component {

    render() {
        const { trips } = this.props;

        var tripButtons = trips.map((trip, i) => {
            return <TripButton key={i} text={trip.title} href={trip.get_absolute_url} image="https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg"/>
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


export class TripButton extends Component {
    render() {
        const props = Object.assign({
            image: undefined,
            text: undefined,
            href: undefined,
        }, this.props);

        return (
            <a href={props.href} className={styles.tripButton}>
                <img className={styles.tripButton__img} src={props.image}/>
                <h5 className={styles.tripButton__title}>{props.text}</h5>
            </a>
        );
    }
}


export class TripButtonWithCallback extends Component {
    render() {
        const props = Object.assign({
            image: undefined,
            text: undefined,
            onClick: undefined,
            icon: undefined,
        }, this.props);

        return (
            <div onClick={props.onClick} className={styles.tripButton}>
                <div className={styles.tripButton__icon} src={props.image}>
                    {props.icon ? props.icon : null}
                </div>
                <h5 className={styles.tripButton__title}>{props.text}</h5>
            </div>
        );
    }
}
