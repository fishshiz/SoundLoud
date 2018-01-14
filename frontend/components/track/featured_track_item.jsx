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
      <div className="userStreamItem">
        <div className="sound streamContext owned">
          <div className="sound__body">
            <div className="sound__artwork">
              <div className="sound__coverArt">
                  <img src={ this.props.track.image_url }/>
              </div>
            </div>
            <div className="sound__content">
            
              <div className="sound__header">
                <div className="soundTitle sc-clearfix sc-hyphenate sc-type-h2 streamContext">
                  <div className="soundTitle__titleContainer">
                  
                  <div className="soundTitle__playButton">
                  <TogglePlayContainer track={ this.props.track } />
                  </div>
                    <div className="soundTitle__usernameTitleContainer">
                      <div className="sc-type-light soundTitle__secondary ">
                        <Link to={`/artists/${this.props.track.artist_id}`} className="soundTitle__username sc-link-light" >
                          {this.props.artist.name}
                        </Link>
                      </div>
                      <div className="soundTitle__title sc-link-dark">
                        {this.props.track.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}