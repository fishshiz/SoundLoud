import { combineReducers } from 'redux';
import artists from './artist_reducer';
import tracks from './track_reducer';

export default combineReducers({
    artists,
    tracks
});