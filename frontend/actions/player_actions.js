export const PLAY_TRACK = 'PLAY_TRACK';
export const FETCH_CURRENT_TRACK = 'FETCH_CURRENT_TRACK';

export const getPlay = track => dispatch => (
    dispatch(playTrack(track))
);

export const playTrack = track => ({
    type: PLAY_TRACK,
    payload: {track, trackId: track.id, paused: false }
});

export const fetchCurrentTrack = trackId => ({
    type: FETCH_CURRENT_TRACK,
    trackId
});