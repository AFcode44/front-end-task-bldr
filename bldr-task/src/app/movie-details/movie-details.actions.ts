import { Action } from '@ngrx/store';
import { MoviesInterface } from '../shared/services/movies/movies.interface';

export enum MovieDetailsActionTypes {
  SelectMovieAction = '[SelectMovie] Action',
  DeselectMovieAction = '[DeselectMovie] Action',
  SelectMovieDetailsAction = '[SelectMovieDetails] Action',
}

export class SelectMovie implements Action {
  readonly type = MovieDetailsActionTypes.SelectMovieAction;

  constructor(public singleMovie: {movie: MoviesInterface}) {}
}

export class DeelectMovie implements Action {
  readonly type = MovieDetailsActionTypes.DeselectMovieAction;
}

export type MovieDetailsActions = SelectMovie | DeelectMovie;
