import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AppAuth } from './auth'

const AppRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return AppAuth.isAuthenticated === true 
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
        }} />
    }} />
)

export default AppRoute

