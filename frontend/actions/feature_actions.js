import { fetchFeaturedTracks } from '../util/feature_api_util';

export const RECEIVE_FEATURED_TRACKS = 'RECEIVE_FEATURED_TRACKS';
export const REMOVE_FEATURED_TRACKS = 'REMOVE_FEATURED_TRACKS';

export const receiveFeaturedTracks = (payload) => ({
    type: RECEIVE_FEATURED_TRACKS,
    payload
});

export const removeFeaturedTracks = () => ({
    type: REMOVE_FEATURED_TRACKS
});
 
export const requestFeaturedTracks = () => (dispatch) => (
fetchFeaturedTracks().then(
    (payload) => dispatch(receiveFeaturedTracks(payload))
));