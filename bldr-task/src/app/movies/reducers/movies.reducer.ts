import { MoviesActions, MoviesActionTypes } from '../movies.actions';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { FilterInterface } from 'src/app/shared/services/movies/filter.interface';
import { FilterBy, FilterOrder } from 'src/app/ui/filter-box/filter-box.component';


export const moviesFeatureKey = 'movies';

export interface MoviesState {
  moviesFilter: FilterInterface;
  movies: Array<MoviesInterface>;
}

export const initialState: MoviesState = {
  moviesFilter: {sortBy: FilterBy.TITLE, sortOrder: FilterOrder.DESCENDING},
  movies: undefined
};

export function moviesReducer(state = initialState, action: MoviesActions): MoviesState {
  switch (action.type) {
    case MoviesActionTypes.LoadMoviesAction:
      console.error('KOTTTT', action);
      return {
        moviesFilter: action.filterSettings.filters,
        movies: action.moviesList.movies
      };
    case MoviesActionTypes.FilterMovieAction:
      return  {
        moviesFilter: action.filterSettings.filter,
        movies: state.movies
      };
    default:
      return state;
  }
}
