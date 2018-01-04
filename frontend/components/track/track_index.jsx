import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({currentArtist, tracks, artists, destroyTrack}) => {
    return (
        <ul className="soundList sc-list-nostyle">
            {
                tracks.map(track => (
                    <li className="soundList__item" 
                    key={track.id}>
                    <TrackIndexItem
                    track={track}
                    artist={artists[track.artist_id]}
                    currentArtist={currentArtist}
                    destroyTrack={destroyTrack} /></li>
                ))
                }
                </ul>
    );
};

export default TrackIndex;