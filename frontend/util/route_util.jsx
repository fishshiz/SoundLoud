import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router';
import { openModal } from '../actions/modal_actions';

const Auth = ({component: Component, path, exact, loggedIn}) => (
  <Route
    exact={Boolean(exact)}
    path={path}
    render={ (props) =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/dashboard' />
      )
    }
  />
);

const Protected = ({component: Component, path, exact, loggedIn}) => (
  <Route
    exact={Boolean(exact)}
    path={path}
    render={ (props) =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        openModal('signin')
      )
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentArtist)
});

const mapDispatchToProps = dispatch => ({
  openModal: (modalType) => dispatch(openModal(modalType))
});

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Auth)
);