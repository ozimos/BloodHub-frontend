import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../utils/auth'

export default  ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.getUserToken()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)