import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Logout } from 'src/app/shared/auth/auth.actions';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/auth/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>,
    /*private router: Router,*/ private userService: UserService) {
   }

  ngOnInit() {
    this.store.subscribe((state: AppState) => {
      console.error('stan:' , state);
    });
  }

  public onLogOut(): void {
    // this.userService.logOut();
    this.store.dispatch(new Logout());
    // this.router.navigateByUrl('/login');

  }

}
