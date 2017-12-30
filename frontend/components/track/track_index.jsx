import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({tracks, artists}) => {
    return (
        <ul className="soundList sc-list-nostyle">
            {
                tracks.map(track => (
                    <li className="soundList__item" 
                    key={track.id}>
                    <TrackIndexItem
                    track={track}
                    artist={artists[track.artist_id]} /></li>
                ))
                }
                </ul>
    );
};

export default TrackIndex;