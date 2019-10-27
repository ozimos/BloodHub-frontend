import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../utils/auth'

export default  ({ children, ...rest }) => (
    <Route {...rest} render={props => (
        auth.getUserToken()
            ? children
            : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />
)