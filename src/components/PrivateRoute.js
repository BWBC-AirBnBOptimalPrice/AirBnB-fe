import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (
    <Route {...rest} //Use first three lines as boilerplate
    render={() => {
      if (localStorage.getItem('token')) {
        return <Component />
      } else {
        return <Redirect to='/'/>;
      }
    }} />
  );
};

export default PrivateRoute;