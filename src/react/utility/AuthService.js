import Auth0Lock from 'auth0-lock';
import { EventEmitter } from 'events';
import { browserHistory } from 'react-router';

import { isTokenExpired } from './jwtHelper';
import { authFetch } from './apiHelper';


export default class AuthService extends EventEmitter {
    constructor(clientId, domain) {
        super();
        // Configure Auth0
        this.lock = new Auth0Lock(clientId, domain, {});
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        // Add callback for lock `authorization_error` event
        this.lock.on('authorization_error', this._authorizationError.bind(this));
        // binds login functions to keep this context
        this.login = this.login.bind(this);
    }

    _doAuthentication(authResult) {
        // Saves the user token
        this.setToken(authResult.idToken);
        // Go to home page
        browserHistory.replace('/');
        // Async loads user profile data
        this.lock.getProfile(authResult.idToken, (error, profile) => {
            if (error) {
                console.log('Error loading user profile:', error);
            } else {
                this.setProfile(profile);
            }
        });
    }

    _authorizationError(error) {
        // Unexpected authentication error
        console.log('Authentication Error', error);
    }

    login() {
        // Call the show method to display the widget.
        this.lock.show()
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !isTokenExpired(token);
    }

    setToken(idToken) {
        // Get or Create Django User_JWT object (to relate JWT to user)
        authFetch('http://127.0.0.1:8000/api/user/jwt/get-or-create', {
            'Authorization': 'Bearer ' + idToken,
        });
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }

    setProfile(profile) {
        // Saves profile data to local storage
        localStorage.setItem('profile', JSON.stringify(profile));
        // Triggers profile_updated event to update UI
        this.emit('profile_updated', profile);
    }

    getProfile() {
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile');
        return profile ? JSON.parse(localStorage.profile) : {};
    }

    updateProfile(userId, data) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + this.getToken(),
        };

        return fetch(`https://${this.domain}/api/v2/users/${userId}`, {
            method: 'patch',
            headers: headers,
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .json(newProfile => this.setProfile(newProfile));
    }
}
