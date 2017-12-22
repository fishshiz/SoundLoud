import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page';
import ModalContainer from './splash_page/modal_container';
import DashboardContainer from './dashboard/dashboard_container';


const App = () => (
  <div>
    <header id="header">
    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
    </Switch>
    <ModalContainer />
    </header>
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
  </div>
);

export default App;