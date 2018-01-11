import React from 'react';
import FeaturedTrackItem from './featured_track_item';

export default class FeaturedTrackIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            featuredTracks: this.props.requestFeaturedTracks()
        });
    }


      render() {
          return (
            <ul className="featured-track-index">
          {this.props.featuredTracks.map((track, key) => (
            <FeaturedTrackItem track={track} artist={this.props.artists[track.artist_id]} key={`featured-${key}`} />
          ))}
            </ul>
          );
      }
}