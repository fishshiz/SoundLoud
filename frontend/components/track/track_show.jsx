import React from 'react';
import { Link } from 'react-router-dom';
import TogglePlayContainer from '../player/toggle_play_container';
import DeleteTrackContainer from './delete_track_container';
import CommentIndex from '../comment/comment_index';

export default class TrackShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.requestTrack(this.props.trackId);
    }

    componentWillReceiveProps(newProps) {
        if(this.props.trackId !== newProps.trackId) {
          this.props.requestTrack(newProps.trackId);
        }
      }

      componentWillUnmount() {
        this.props.clearTrack();
      }

    render() {
      console.log(this.props.artist);
      if (this.props.track.length === 1) {
        return (
          <div className="l-container l-content">
          <ul className="soundList sc-list-nostyle">
          <li className="soundList__item">
            <div className="userStreamItem">
              <div className="sound streamContext owned">
                <div className="sound__body">
                  <div className="sound__artwork">
                    <div className="sound__coverArt">
                        <img src={ this.props.track[0].image_url }/>
                    </div>
                  </div>
                  <div className="sound__content">
                  
                    <div className="sound__header">
                      <div className="soundTitle sc-clearfix sc-hyphenate sc-type-h2 streamContext">
                        <div className="soundTitle__titleContainer">
                        
                        <div className="soundTitle__playButton">
                        <TogglePlayContainer track={ this.props.track[0] } />
                        </div>
                          <div className="soundTitle__usernameTitleContainer">
                            <div className="sc-type-light soundTitle__secondary ">
                              <Link to={`/artists/${this.props.track[0].artist_id}`} className="soundTitle__username sc-link-light" >
                                {this.props.artist.name}
                              </Link>
                            </div>
                            <div className="soundTitle__title sc-link-dark">
                              {this.props.track[0].title}
                            </div>
                          </div>
                        </div>
                        {this.props.track[0].description}
                      </div>
                      </div>
                      {
                      this.props.currentArtist.id === this.props.artist.id ? (
                        <DeleteTrackContainer track={this.props.track} />
                      ) : null
                    }
                    
                    </div>
                    
                    <div className="sound__footer g-all-transitions-300">
                      <div className="sound__footerRight">
                        <div className="sound__soundStats">
                          <ul className="soundStats sc-ministats-group">
                            <li className="sc-ministats-item">
                            <i className="sc-ministats-small fa fa-play" aria-hidden="true"></i>
                              <span className="sc-ministats sc-ministats-small sc-ministats-plays">
                                {this.props.track[0].play_count}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </li>
              <CommentIndex />
            </ul>
            </div>
          );
      } else {
        return null;
      }
    }
}