import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashPage from "./splash_page/splash_page";
import ModalContainer from "./splash_page/modal_container";
import StreamContainer from "./stream/stream_container";
import NavBarContainer from "./navbar/navbar_container";
import ArtistShowContainer from "./artist/artist_show_container";
import EditContainer from "./artist/edit_container";
import UploadContainer from "./track/upload_container";
import PlayerContainer from "./player/player_container";
import TrackShowContainer from "./track/track_show_container";

const App = () => (
  <div>
    <header id="header">
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <ProtectedRoute component={NavBarContainer} />
      </Switch>
      <ModalContainer />
    </header>
    <ProtectedRoute exact path="/stream" component={StreamContainer} />
    <AuthRoute exact path="/" component={StreamContainer} />
    <ProtectedRoute
      exact
      path="/artists/:artistId"
      component={ArtistShowContainer}
    />
    <ProtectedRoute exact path="/upload" component={UploadContainer} />
    <ProtectedRoute
      exact
      path="/tracks/:trackId"
      component={TrackShowContainer}
    />
    <ProtectedRoute exact path="/edit" component={EditContainer} />
    <footer>
      <PlayerContainer />
    </footer>
  </div>
);

export default App;
