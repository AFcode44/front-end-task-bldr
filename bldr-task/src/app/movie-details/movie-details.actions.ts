import { Action } from '@ngrx/store';
import { MoviesInterface } from '../shared/services/movies/movies.interface';

export enum MovieDetailsActionTypes {
  SelectMovieAction = '[SelectMovie] Action',
  DeselectMovieAction = '[DeselectMovie] Action',
  SelectMovieDetailsAction = '[SelectMovieDetails] Action',
  // DeselectMovieDetailsAction = '[DeselectMovieDetails] Action',
}

export class SelectMovie implements Action {
  readonly type = MovieDetailsActionTypes.SelectMovieAction;

  constructor(public singleMovie: {movie: MoviesInterface}) {}
}

export class DeelectMovie implements Action {
  readonly type = MovieDetailsActionTypes.DeselectMovieAction;

  // constructor(public movieNumber: number) {}
}

// export class MovieDetailsSelect implements Action {
//   readonly type = MovieDetailsActionTypes.SelectMovieDetailsAction;

//   constructor(public singleMovie: {movie: MoviesInterface}) {}
// }

// export class MovieDetailsDeselect implements Action {
//   readonly type = MovieDetailsActionTypes.DeselectMovieDetailsAction;

//   constructor(public singleMovie: {movie: MoviesInterface}) {}
// }


export type MovieDetailsActions = SelectMovie | DeelectMovie;
