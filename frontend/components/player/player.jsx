import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends React.Component {
    

    render() {
        return (
            <ReactAudioPlayer
            src="http://s3-us-west-1.amazonaws.com/soundloud-dev/tracks/audios/000/000/004/original/Remo_Drive_-_Im_My_Own_Doctor.mp3?1514585869"
            autoPlay
            controls
            />
        );
    }
}