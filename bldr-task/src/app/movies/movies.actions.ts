import { Action } from '@ngrx/store';
import { MoviesInterface } from '../shared/services/movies/movies.interface';
import { FilterInterface } from '../shared/services/movies/filter.interface';

export enum MoviesActionTypes {
  LoadMoviesAction = '[LoadMovies] Action',
  FilterMovieAction = '[FilterMovie] Action',
}

export class LoadMovies implements Action {
  readonly type = MoviesActionTypes.LoadMoviesAction;

  public constructor(public moviesList: {movies: Array<MoviesInterface>},
    public filterSettings: {filters: FilterInterface}) {}
}

export class MovieFilterApply implements Action {
  readonly type = MoviesActionTypes.FilterMovieAction;

  public constructor(public filterSettings: {filter: FilterInterface}) {}
}

export type MoviesActions = LoadMovies | MovieFilterApply;
