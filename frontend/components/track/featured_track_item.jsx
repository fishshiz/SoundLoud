import React from 'react';
import { Link } from 'react-router-dom';
import TogglePlayContainer from '../player/toggle_play_container';
import DeleteTrackContainer from './delete_track_container';

const FeaturedTrackItem = ({ track, artist }) => {
    return (
      <div className="userStreamItem">
        <div className="sound streamContext owned">
          <div className="sound__body">
            <div className="sound__artwork">
              <div className="sound__coverArt">
                  <img src={ track.image_url }/>
              </div>
            </div>
            <div className="sound__content">
            
              <div className="sound__header">
                <div className="soundTitle sc-clearfix sc-hyphenate sc-type-h2 streamContext">
                  <div className="soundTitle__titleContainer">
                  
                  <div className="soundTitle__playButton">
                  <TogglePlayContainer track={ track } />
                  </div>
                    <div className="soundTitle__usernameTitleContainer">
                      <div className="sc-type-light soundTitle__secondary ">
                        <Link to={`/artists/${track.artist_id}`} className="soundTitle__username sc-link-light" >
                          {artist.name}
                        </Link>
                      </div>
                      <div className="soundTitle__title sc-link-dark">
                        {track.title}
                      </div>
                    </div>
                  </div>
                  {track.description}
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FeaturedTrackItem;