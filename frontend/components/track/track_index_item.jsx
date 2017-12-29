import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = ({ track, artist }) => {
  return (
    <div className="track-index-item">
        <img src={track.imageUrl}/>
      <div className="track-index-item-content">
        <span className="artist-link-container">
          <Link to={`/artists/${artist.id}`} className="artist-link" >
            {artist.name}
          </Link>
        </span>
            {track.title}

      </div>
    </div>
  );
};

export default TrackIndexItem;
