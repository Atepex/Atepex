import React from 'react';
import {Route, Redirect } from 'react-router-dom';

function PrivateRoute({component: Component, user, ...remainingProps}) {
    return (
        <Route {...remainingProps} render={(props) => user === true ? <Component {...props} /> : <Redirect to="/" />} />
    );
};

export default PrivateRoute;