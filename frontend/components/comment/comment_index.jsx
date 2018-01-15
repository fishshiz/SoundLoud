import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = ({currentArtist, comments, artists, destroyTrack}) => {
    return (
        <ul className="soundList sc-list-nostyle">
            {
                comments.map(track => (
                    <li className="soundList__item" 
                    key={track.id}>
                    <CommentIndexItem
                    track={track}
                    artist={artists[track.artist_id]}
                    currentArtist={currentArtist}
                    destroyTrack={destroyTrack} /></li>
                ))
                }
                </ul>
    );
};

export default CommentIndex;