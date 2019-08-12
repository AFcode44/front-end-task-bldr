import { initialState, movieDetailsReducer } from './movie-details.reducer';

describe('MovieDetails Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = movieDetailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
