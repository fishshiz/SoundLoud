import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: { id: '', title: '', imageUrl: '', audio_url: '' },
        };
    }
    
    componentDidMount(track) {
        
        this.setState({track });
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ track: nextProps.track });
        console.log(nextProps.track);
    }
    
    shouldComponentUpdate(nextProps) {
        console.log(nextProps)
        if(this.props.track !== nextProps.track) {
            return true;
        } else {
            return false;
        }
    }
    

    render() {
        const {track} = this.state;
        
        console.log(track);
        return (
            <ReactAudioPlayer
            src={track.audio_url}
            autoPlay
            controls
            />
        );
    }
}