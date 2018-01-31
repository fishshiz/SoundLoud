import React from 'react';
import FeaturedTrackItem from './featured_track_item';

export default class FeaturedTrackIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: true,
            discussed: false
        };
        this.toggleList = this.toggleList.bind(this);
    }
    
    componentDidMount() {
        if(this.state.featured) this.props.requestFeaturedTracks();
        if(this.state.discussed) this.props.requestDiscussedTracks();
        console.log(this.state);
    }
    
    componentWillUnmount() {
        this.props.removeMainTracks();
    }

    // componentDidUpdate() {
    //     if(this.state.featured) this.props.requestFeaturedTracks();
    //     if(this.state.discussed) this.props.requestDiscussedTracks();
    //     console.log(this.state);
    // }
    
   toggleList(e) {
       if (e.currentTarget.className === 'featured') {
           this.setState({
               featured: true,
               discussed: false
            });
            console.log(this.state);
        } else if (e.currentTarget.className === 'discussed') {
            this.setState({
                featured: false,
                discussed: true
            });
            console.log(this.state);
       }
   }
    
    render() {

                return (
                    <div className="l-container l-content">
                        <div>
                            <div className="l-fluid-fixed">
                                <div className="featured__title">
                                    <h2 className="featured" onClick={this.toggleList}>Featured Tracks</h2>
                                    <h2 className="discussed" onClick={this.toggleList}>Most Discussed Tracks</h2>
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