import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
import { UserService } from '../auth/user.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';


describe('AuthGuard', () => {
  const store = {
    // isLogged: function () { }
  };
  const router = {
    navigateByUrl: function () { }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('should return true if user is already logged created', () => {
    const service: AuthGuard = new AuthGuard(store as Store<AppState>, router as any);
    // const isLoggedSpy = spyOn(userService, 'isLogged').and.returnValue(true);
    expect(service.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toEqual(true);
    // expect(isLoggedSpy).toHaveBeenCalled();
  });

  it('should return false and navigate to login if user is not logged', () => {
    const service: AuthGuard = new AuthGuard(store as Store<AppState>, router as any);
    const navigateSpy = spyOn(router, 'navigateByUrl');
    expect(service.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toEqual(false);
    expect(navigateSpy).toHaveBeenCalled();
  });
});
