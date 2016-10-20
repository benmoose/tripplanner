import React, {Component} from 'react';

import styles from './styles/tripButton.scss';


export default class TripButton extends Component {
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
