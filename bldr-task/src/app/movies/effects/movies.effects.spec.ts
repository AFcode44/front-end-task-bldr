import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { MoviesEffects } from './movies.effects';
import { Actions } from '@ngrx/effects';

describe('MoviesEffects', () => {
  const actions$: Observable<any> = new Observable<Actions>();
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(MoviesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
