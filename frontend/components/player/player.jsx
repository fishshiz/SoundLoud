import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Link from 'react-router-dom';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            track: { id: '', title: '', imageUrl: '', audio_url: '' }
        };
        this.grabArtistName = this.grabArtistName.bind(this);
    }
    
    componentDidMount(track) {
        
        this.setState({track });
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ track: nextProps.track});
        console.log(nextProps);
    }
    
    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
        if(this.props.track !== nextProps.track) {
            return true;
        } else {
            return false;
        }
    }

    grabArtistName() {
        console.log(this.state.track.id)
        if(this.state.track.id !== '') {
            const artist = this.props.artists[this.state.track.artist_id];
            return (
                <div to={`/artists/${artist.id}`}>{artist.name}</div>
            );
        } else {
            return null;
        }
    }
    

    render() {
        const {track} = this.state;
        
        console.log(track);
        return (
            <div className="playControls g-z-index-header m-visible">
            <div className="playControls__inner">
            <div className="playControls__wrapper l-container l-fullwidth">
            <ReactAudioPlayer
            className="player"
            src={track.audio_url}
            style={{'display': 'flex', 'alignItems': 'center', 'backgroundColor': 'orange', 'color': 'orange' }}
            autoPlay
            controls
            />
            <div className="playbackSoundBadge">
            <img className="playbackSoundBadge__avatar sc-media-image" src={track.image_url} />
            <div className="playbackSoundBadge__titleContextContainer">
            {this.grabArtistName()}
            <div className="playbackSoundBadge__title">
            <div className="playbackSoundBadge__titleLink sc-truncate">{track.title}</div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}