import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = ({ track, artist }) => {
  debugger;
  return (
    <div className="track-index-item">
        <img src={track.image_url}/>
      <div className="track-index-item-content">
        <span className="artist-link-container">
          <Link to={`/artists/${track.artist_id}`} className="artist-link" >
            Artist
          </Link>
        </span>
            {track.title}

      </div>
    </div>
  );
};

export default TrackIndexItem;
