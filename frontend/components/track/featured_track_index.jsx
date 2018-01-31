import React from 'react';
import FeaturedTrackItem from './featured_track_item';

export default class FeaturedTrackIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        let list;
        this.state = {
            list: 'featured'
        };
        this.toggleList = this.toggleList.bind(this);
    }
    
    componentDidMount() {
        console.log('component mounted');
        if(this.state.list === 'featured') this.props.requestFeaturedTracks();
        if(this.state.list === 'discussed') this.props.requestDiscussedTracks();
        console.log(this.state);
    }
    
    componentWillUnmount() {
        console.log('component unmounted');
        this.props.removeMainTracks();
    }

    // componentDidUpdate() {
    //     if(this.state.featured) this.props.requestFeaturedTracks();
    //     if(this.state.discussed) this.props.requestDiscussedTracks();
    //     console.log(this.state);
    // }

    // shouldComponentUpdate() {

    //     if (this.state.list !== 'featured') return true;
    //     return true;
    // }
    
   toggleList(e) {
       console.log('toggle list');
       e.preventDefault();
       let list;
    //    debugger;
       if (this.state.list === 'featured') {
           list = 'discussed';
       } else {
           list = 'featured';
       }
        this.setState({
            list
        });
        // debugger;
        if(this.state.list === 'featured') this.props.requestFeaturedTracks();
        if(this.state.list === 'discussed') this.props.requestDiscussedTracks();
        console.log('state', this.state);
        
    }
    
    render() {
        // debugger;
        console.log('render');
        let subheading = this.state.list === 'featured' ? 'Hear Soundloud\'s most popular tracks:' : 'Hear Soundloud\'s most discussed tracks:';
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