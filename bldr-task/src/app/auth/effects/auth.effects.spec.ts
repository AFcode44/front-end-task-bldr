import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthEffects } from './auth.effects';
import { Router } from '@angular/router';

describe('AuthEffects', () => {
  const actions$: Observable<any> = new Observable<any>();
  let effects: AuthEffects;
  const routerMock = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        AuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
