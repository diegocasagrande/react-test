import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Main';
import Lista from './pages/Lista';
import Video from './components/Video';
import Sidebar from './components/Sidebar';

import store from './store';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)} />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={props => (
          <Provider store={store}>
            <Login {...props} />
          </Provider>
        )}
      />
      <PrivateRoute
        path="/app"
        component={() => (
          <Provider store={store}>
            <Video />
            <Sidebar />
          </Provider>
        )}
      />
      <PrivateRoute
        path="/lista"
        component={() => (
          <Provider store={store}>
            <Lista />
          </Provider>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
