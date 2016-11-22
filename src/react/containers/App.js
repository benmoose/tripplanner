/*
 * Application Container with Navigation and Sidebar
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavigationContainer from './Navigation'

import Sidemenu from '../components/Sidemenu/'
import Window from '../components/window/'


class App extends Component {

    render() {
        const { params } = this.props

        // add auth instance from route to children
        let children = null
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth,
            })
        }

        return (
            <div>
                <NavigationContainer/>
                <Sidemenu/>
                <Window>
                    {children}
                </Window>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
