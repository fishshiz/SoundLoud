import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page';
import ModalContainer from './splash_page/modal_container';

const App = () => (
  <div>
    <header id="header">
    </header>
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;