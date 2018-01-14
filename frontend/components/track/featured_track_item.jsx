import React from 'react';
import { Link } from 'react-router-dom';
import TogglePlayContainer from '../player/toggle_play_container';
import DeleteTrackContainer from './delete_track_container';

export default class FeaturedTrackItem extends React.Component {
  constructor(props) {
    super(props);

  }
 render() {
    return (
      <div className="userStreamItem feature__grid">
        <div className="sound streamContext owned">
          <div className="sound__body">
            <div className="sound__artwork">
              <div className="sound__coverArt feature__coverart">
                  <img src={ this.props.track.image_url }/>
                  <div className="soundTitle__playButton hidden">
                  <TogglePlayContainer track={ this.props.track } />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature__artist">
          <Link to={`/artists/${this.props.artist.id}`}> 
            {this.props.artist.name}
          </Link>
        </div>
        <div className="feature__track__title">
          {this.props.track.title}
        </div>
      </div>
    );
  }
}