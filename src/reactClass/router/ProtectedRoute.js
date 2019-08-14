import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  path,
  component: Component,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: path } }} />
      )
    }
  />
);
