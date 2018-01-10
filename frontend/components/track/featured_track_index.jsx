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
        //   debugger;
          return (
            <ul className="featured-track-index">
          {this.props.featuredTracks.map((track, key) => (
            <FeaturedTrackItem track={track} key={`featured-${key}`} />
          ))}
            </ul>
          );
      }
}