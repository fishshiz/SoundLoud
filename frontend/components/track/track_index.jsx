import React from "react";
import TrackIndexItem from "./track_index_item";

const TrackIndex = ({ currentArtist, tracks, artists, destroyTrack }) => {
  if (tracks.length > 0) {
    return (
      <ul className="soundList sc-list-nostyle">
        {tracks.map(track => (
          <li className="soundList__item" key={track.id}>
            <TrackIndexItem
              track={track}
              artist={artists[track.artist_id]}
              currentArtist={currentArtist}
              destroyTrack={destroyTrack}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <div className="noTrackContainer">
        <h2 className="noTracksText">
          It doesn't look like anything is here...
        </h2>
        <p className="p__noTracks">This user hasn't added any tracks yet.</p>
      </div>
    );
  }
};

export default TrackIndex;
