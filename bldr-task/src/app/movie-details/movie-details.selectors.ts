import { createSelector } from '@ngrx/store';

export const selectMoviesDetailsState = (state) => state.movieDetails;

export const selectMovie = createSelector(
  selectMoviesDetailsState,
  (movieObj) => movieObj
);

export const deselectMovie = createSelector(
  selectMoviesDetailsState,
  (movieObj) => movieObj
);
