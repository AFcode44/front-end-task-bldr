import { Action } from '@ngrx/store';
import { MoviesInterface } from '../shared/services/movies/movies.interface';
import { FilterInterface } from '../shared/services/movies/filter.interface';

export enum MoviesActionTypes {
  LoadMoviesAction = '[LoadMovies] Action',
  FilterMovieAction = '[FilterMovie] Action',
  TotalMoviesSetAction = '[TotalMoviesSet] Action'
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

export class TotalMoviesSet implements Action {
  readonly type = MoviesActionTypes.TotalMoviesSetAction;

  public constructor(public totalMoviesNr: {amount: number}) {}
}

export type MoviesActions = LoadMovies | MovieFilterApply | TotalMoviesSet;
