import values from 'lodash/values';

export const tracksArray = state => {
  return values(state.entities.tracks);
};

export const searchResults = state => (
  values(state.entities.searches)
);

export const featuredTracks = state => (
  values(state.entities.featured)
);