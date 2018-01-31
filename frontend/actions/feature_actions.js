import { fetchFeaturedTracks, fetchDiscussedTracks } from '../util/feature_api_util';

export const RECEIVE_MAIN_TRACKS = 'RECEIVE_MAIN_TRACKS';
export const REMOVE_MAIN_TRACKS = 'REMOVE_MAIN_TRACKS';

export const receiveMainTracks = (payload) => ({
    type: RECEIVE_MAIN_TRACKS,
    payload
});

export const removeMainTracks = () => ({
    type: REMOVE_MAIN_TRACKS
});
 
export const requestFeaturedTracks = () => (dispatch) => (
fetchFeaturedTracks().then(
    (payload) => dispatch(receiveMainTracks(payload))
));
 
export const requestCommentedTracks = () => (dispatch) => (
fetchDiscussedTracks().then(
    (payload) => dispatch(receiveMainTracks(payload))
));