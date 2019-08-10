import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout } from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of, defer, Observable, Subject } from 'rxjs';
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  public login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap((action) => {
      sessionStorage.setItem('userData', JSON.stringify(action.payload));
      this.router.navigateByUrl('/movies');
    })
  );

  @Effect({ dispatch: false })
  public logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {
      sessionStorage.removeItem('userData');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  public init$ = defer(() => {
    const userData = sessionStorage.getItem('userData');
    console.error('init: ', userData);
    if (userData) {
      return of(new Login(JSON.parse(userData)));
    } else {
      return of(new Logout() as Action);
    }
  });

  constructor(private router: Router, private httpClient: HttpClient, private actions$: Actions) { }

  private getHeaders(): string {
    return '';
  }

}
