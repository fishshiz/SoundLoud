import React from 'react';
import FeaturedTrackItem from './featured_track_item';

export default class FeaturedTrackIndex extends React.Component {
    constructor(props) {
        super(props);
        let list;
        this.state = {
            list: 'featured'
        };
        this.toggleList = this.toggleList.bind(this);
    }
    
    componentDidMount() {
        if(this.state.list === 'featured') this.props.requestFeaturedTracks();
        if(this.state.list === 'discussed') this.props.requestDiscussedTracks();
    }
    
    componentWillUnmount() {
        this.props.removeMainTracks();
    }
    
   toggleList(e) {
        e.preventDefault();
        let element = e.currentTarget;
        let other = Array.from(element.classList).includes('featured') ? document.querySelector('.discussed') : document.querySelector('.featured');
        other.classList.remove('selected');
        element.classList.add('selected');
        let list;
        if (this.state.list === 'featured') {
            this.props.requestDiscussedTracks();
            list = 'discussed';
        } else {
            this.props.requestFeaturedTracks();
            list = 'featured';
        }
        this.setState({
            list
        });        
    }
    
    render() {
        let subheading = this.state.list === 'featured' ? 'Hear Soundloud\'s most popular tracks:' : 'Hear Soundloud\'s most discussed tracks:';
                return (
                    <div className="l-container l-content">
                        <div>
                            <div className="l-fluid-fixed">
                                <div className="featured__title">
                                    <h2 className="featured selected" onClick={this.toggleList}>Featured Tracks</h2>
                                    <h2 className="discussed" onClick={this.toggleList}>Most Discussed Tracks</h2>
                                </div>
                                <div className="stream__header g-flex-row-centered-spread">
                                    <h1 className="stream__title sc-type-light sc-type-large">
                                        {subheading}
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