import React from 'react';
import FeaturedTrackItem from './featured_track_item';

export default class FeaturedTrackIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        this.props.requestFeaturedTracks();
    }
    
    componentWillUnmount() {
        this.props.removeFeaturedTracks();
    }
    
   
    
    render() {

                return (
                    <div className="l-container l-content">
                    <div>
                        <div className="l-fluid-fixed">
                        <div className="featured__title">
                    <h2>Featured Tracks</h2>
                    </div>
                    <div className="stream__header g-flex-row-centered-spread">
                    <h1 className="stream__title sc-type-light sc-type-large">
    Hear Soundloud's most popular tracks:
  </h1>
                    </div>
            <ul className="featured-track-index">
                {
                    this.props.featuredTracks[0].map((track, key) => {
                        return (
                            <FeaturedTrackItem key={`featured-${key}`} track={track} artist={this.props.featuredTracks[1][track.artist_id]}/>
                        );
                    })  
                }
            </ul>
            </div>
            </div>
            </div>
        );
    }
}