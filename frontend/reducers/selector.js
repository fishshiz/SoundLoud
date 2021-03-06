import values from "lodash/values";

export const tracksArray = state => {
  return values(state.entities.tracks);
};

export const searchResults = state => values(state.entities.searches);

export const featuredTracks = state => [
  values(state.entities.tracks),
  state.entities.artists
];

export const commentsArray = state => {
  return values(state.entities.comments);
};

export const authorsArray = state => {
  return values(state.entities.authors);
};

export const artistArray = state => {
  return values(state.entities.artists);
};
export const playlistArray = state => {
  return values(state.entities.playlists);
};
