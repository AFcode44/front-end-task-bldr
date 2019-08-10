import { createSelector } from '@ngrx/store';

export const selectMoviesDetailsState = (state) => state.movieDetails;


// export const selectMovieNumber = createSelector(
//   selectMoviesDetailsState,
//   (movieObj) => movieObj //? movieObj.movie : undefined;
// );

export const selectMovie = createSelector(
  selectMoviesDetailsState,
  (movieObj) => movieObj
);

export const deselectMovie = createSelector(
  selectMoviesDetailsState,
  (movieObj) => movieObj
);
