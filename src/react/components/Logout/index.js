import React, { Component, PropTypes as T } from 'react';
import AuthService from '../../utility/AuthService';

import { USER_DETAIL } from '../../constants/endpoints';


export default class Logout extends Component {
    static contextTypes = {
        router: T.object,
    };

    static propTypes = {
        auth: T.instanceOf(AuthService)
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            profile: props.auth.getProfile(),
        };

        props.auth.on('profile_updated', newProfile => {
            this.setState({profile: newProfile});
        });
    }

    callApis() {
        const { auth } = this.props;
        auth.fetch(USER_DETAIL);
    }

    logout() {
        this.props.auth.logout();
        console.log('User logged out');
        this.context.router.push('/login');
    }

    render() {
        const {profile} = this.state;
        console.log('profile', profile);

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{profile.name}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{profile.email}</td>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td><img src={profile.picture}/></td>
                    </tr>
                    <tr>
                        <td>nickname</td>
                        <td>{profile.nickname}</td>
                    </tr>
                    <tr>
                        <td>created at</td>
                        <td>{profile.created_at}</td>
                    </tr>
                    <tr>
                        <td>updated at</td>
                        <td>{profile.updated_at}</td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}
