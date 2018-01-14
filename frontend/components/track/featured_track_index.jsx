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
            <ul className="featured-track-index">
                {
                    this.props.featuredTracks[0].map((track, key) => {
                        return (
                            <FeaturedTrackItem key={`featured-${key}`} track={track} artist={this.props.featuredTracks[1][track.artist_id]}/>
                        );
                    })  
                }
            </ul>
        );
    }
}