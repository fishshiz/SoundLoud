import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_ARTIST = 'RECEIVE_CURRENT_ARTIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const login = artist => dispatch => (
  SessionAPIUtil.login(artist)
  .then(
    currentArtist => dispatch(receiveCurrentArtist(currentArtist)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(
    () => dispatch(receiveCurrentArtist(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const signup = artist => dispatch => (
  SessionAPIUtil.signup(artist)
  .then(
    currentArtist => dispatch(receiveCurrentArtist(currentArtist)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

const receiveCurrentArtist = artist => ({
  type: RECEIVE_CURRENT_ARTIST,
  artist
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});