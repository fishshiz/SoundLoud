import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentArtist)
});

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Redirect to="/stream" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
