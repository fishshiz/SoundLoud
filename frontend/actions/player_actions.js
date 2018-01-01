export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const FETCH_CURRENT_TRACK = 'FETCH_CURRENT_TRACK';

export const getPlay = track => dispatch => (
    dispatch(playTrack(track))
);

export const getPause = track => dispatch => (
    dispatch(pauseTrack(track))
);

export const playTrack = track => ({
    type: PLAY_TRACK,
    payload: {track, trackId: track.id, paused: false }
});

export const pauseTrack = track => ({
    type: PAUSE_TRACK,
    payload: {track, trackId: track.id, paused: true }
});

export const fetchCurrentTrack = trackId => ({
    type: FETCH_CURRENT_TRACK,
    trackId
});