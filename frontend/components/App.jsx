import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page/splash_page';
import ModalContainer from './splash_page/modal_container';
import StreamContainer from './stream/stream_container';
import NavBarContainer from './navbar/navbar_container';


const App = () => (
  <div>
    <header id="header">
    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
      <NavBarContainer />
    </Switch>
    <ModalContainer />
    </header>
    <ProtectedRoute exact path="/stream" component={StreamContainer} />
  </div>
);

export default App;