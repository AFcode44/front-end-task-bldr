import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { MovieDetailsActionTypes, MovieDetailsActions } from '../movie-details.actions';


export const movieDetailsFeatureKey = 'movieDetails';

export interface MovieDetailsState {
  // isSelected: boolean;
  // movieNumber: number;
  selectedMovie: MoviesInterface;
}

export const initialState: MovieDetailsState = {
  // isSelected: false,
  // movieNumber: undefined,
  selectedMovie: undefined
};

export function movieDetailsReducer(state = initialState, action: MovieDetailsActions): MovieDetailsState {
  switch (action.type) {
    case MovieDetailsActionTypes.SelectMovieAction:
      return {
        // movieNumber: action.movieNumber,
        selectedMovie: action.singleMovie.movie
      };
    case MovieDetailsActionTypes.DeselectMovieAction:
      return {
        // movieNumber: state.movieNumber,
        selectedMovie: undefined
      };
    default:
      return state;
  }
}
