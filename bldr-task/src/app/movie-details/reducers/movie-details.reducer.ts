import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { MovieDetailsActionTypes, MovieDetailsActions } from '../movie-details.actions';

export const movieDetailsFeatureKey = 'movieDetails';

export interface MovieDetailsState {
  selectedMovie: MoviesInterface;
}

export const initialState: MovieDetailsState = {
  selectedMovie: undefined
};

export function movieDetailsReducer(state = initialState, action: MovieDetailsActions): MovieDetailsState {
  switch (action.type) {
    case MovieDetailsActionTypes.SelectMovieAction:
      return {
        selectedMovie: action.singleMovie.movie
      };
    case MovieDetailsActionTypes.DeselectMovieAction:
      return {
        selectedMovie: undefined
      };
    default:
      return state;
  }
}
