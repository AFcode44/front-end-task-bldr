import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/user/user.interface';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { UserService } from '../../shared/services/user/user.service';
import { Login } from 'src/app/auth/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;
  public errorText = '';

  constructor(private readonly store: Store<AppState>, private router: Router, private readonly userService: UserService) { }

  ngOnInit() {
  }

  public onLogin(): void {
    const notAuthUser: User = { email: this.email, password: this.password, token: '' };

    this.userService.login(notAuthUser).subscribe(
      (user: User) => {
        this.store.dispatch(new Login({ user: user }));
      },
      (error) => {
        this.errorText = 'Unable to authenticate. Please provide the correct username and password.';
      });
  }

  public onKeyPress(event): void {
    if (event.which === 13) {
      this.onLogin();
    }
  }
}
