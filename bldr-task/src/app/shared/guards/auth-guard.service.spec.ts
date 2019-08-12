import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Subject } from 'rxjs';
import { Login } from 'src/app/auth/actions/auth.actions';
import { User } from '../services/user/user.interface';


describe('AuthGuard', () => {
  const store$ = new Subject<any>();
  const store = store$;
  const router = {
    navigateByUrl: function () { }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  xit('should navigate to login if user is not logged', () => {
    const notAuthUser: User = { email: 'email', password: 'password', token: '' };
    const service: AuthGuard = new AuthGuard(store as any as Store<AppState>, router as any);

    const navigateSpy = spyOn(router, 'navigateByUrl');
    store$.next(new Login({ user: notAuthUser }));
    expect(navigateSpy).toHaveBeenCalled();
  });
});
