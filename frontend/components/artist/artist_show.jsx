import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import TrackIndexItem from '../track/track_index_item';


class artistPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.conditionalEditButton = this.conditionalEditButton.bind(this);
    this.trackList = this.trackList.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }


  componentWillReceiveProps(newProps) {
    if(this.props.artistId !== newProps.artistId) {
      this.props.fetchArtist(newProps.artistId);
    }
  }

  trackList() {
    const tracks = this.props.tracks;
    console.log(this.props);
    if (tracks.length !== 0) {
      return (
        <div className="track-list">
          {Object.values(tracks).map((track, idx) => <TrackIndexItem
            className="track"
            track={track}
            key={idx} />)}
          </div>
        );
    } else {
      return (
        <div className="empty-track-list">
          <h3>This artist does not have any tracks... yet.</h3>
        </div>
      );
    }
  }

  conditionalEditButton() {
    if(this.props.currentArtist.id === this.props.artistId) {
        return (
            <div className="image__button" >
                <Link  to="/edit"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
            </div>
        );
    }
  }

  renderContent() {
    if (!this.props.artist) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div className="l-user-hero">
        <div className="profileHeader">
        <div className="profileHeader__edit" />
        <div className="profileHeader__info">
            <div className="profileHeaderInfo sc-media">
                <div className="profileHeaderInfo__avatar sc-media-image">
                    <div className="image m-user image__noOutline customImage interactive sc-artwork sc-artwork-placeholder-1 image__rounded m-loaded">
                        <img src={this.props.artist.image_url} className="show_avatar sc-artwork sc-artwork-placeholder-1 image__rounded image__full g-opacity-transition" />
                    </div>
                </div>
                <div className="profileHeaderInfo__content sc-media-content" >
                    <h3 className="profileHeaderInfo__userName g-type-shrinkwrap-block g-type-shrinkwrap-large-primary">
                        { this.props.artist.name }
                    </h3>
                    <h3> {this.props.artist.bio } </h3>
                </div>
            </div>
            {this.conditionalEditButton()}
        </div>
        </div>
        <div className="userStream__list">
        
        <TrackIndexContainer artistId={this.props.artist.id} />
            </div>
        </div>
      );
    }
  }



  render() {

      return (
        <div>
          {this.renderContent()}
        </div>
      );
    }
  }




export default artistPage;
