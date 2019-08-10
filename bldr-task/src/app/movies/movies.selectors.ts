import { createSelector } from '@ngrx/store';

export const selectMoviesState = (state) => state.movies;


export const getMovies = createSelector(
  selectMoviesState,
  (movieObj) => movieObj.movies
);

export const getMovieFilters = createSelector(
  selectMoviesState,
  (filterObj) => filterObj.moviesFilter
);

