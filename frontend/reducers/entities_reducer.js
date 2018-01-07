import { combineReducers } from 'redux';
import artists from './artist_reducer';
import tracks from './track_reducer';
import searches from './search_reducer';

export default combineReducers({
    artists,
    tracks,
    searches
});