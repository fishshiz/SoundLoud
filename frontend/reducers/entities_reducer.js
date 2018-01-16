import { combineReducers } from 'redux';
import artists from './artist_reducer';
import tracks from './track_reducer';
import searches from './search_reducer';
import comments from './comments_reducer';
import authors from './authors_reducer';

export default combineReducers({
    artists,
    tracks,
    searches,
    comments,
    authors
});