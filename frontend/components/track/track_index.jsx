import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({tracks, artist}) => {
    console.log(tracks);
    return (
        <div className="track-index">
            {
                tracks.map(track => (
                    <TrackIndexItem
                    key={`track-${track.id}`}
                    track={track}
                    artist={artist} />
                ))
                }
                </div>
    );
};

export default TrackIndex;