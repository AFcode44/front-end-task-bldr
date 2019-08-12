import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesActionTypes, MovieFilterApply } from '../movies.actions';
import { tap } from 'rxjs/operators';
import { defer, of } from 'rxjs';

@Injectable()
export class MoviesEffects {

  @Effect({ dispatch: false })
  public filterApply$ = this.actions$.pipe(
    ofType<MovieFilterApply>(MoviesActionTypes.FilterMovieAction),
    tap((action) => {
      sessionStorage.setItem('filterSettings', JSON.stringify(action.filterSettings.filter));
    })
  );

  @Effect()
  public initFilter$ = defer(() => {
    const filterSettings = sessionStorage.getItem('filterSettings');
    if (filterSettings !== 'undefined') {
      return of(new MovieFilterApply({ filter: JSON.parse(filterSettings) }));
    }
  });
  constructor(private actions$: Actions) { }

}
