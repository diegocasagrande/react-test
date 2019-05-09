import React from 'react';

import { Provider } from 'react-redux';

import Login from './components/Login';
import Video from './components/Video';
import Sidebar from './components/Sidebar';

import store from './store';

import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <div className="Login">
            <Login />
          </div>
        )}
      />
      <PrivateRoute
        path="/app"
        component={() => (
          <div className="App">
            <Provider store={store}>
              <Video />
              <Sidebar />
            </Provider>
          </div>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
