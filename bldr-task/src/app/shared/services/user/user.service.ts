import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private loginUri = 'https://marblejs-example.herokuapp.com/api/v1/auth/login';

  constructor(private httpClient: HttpClient) { }

  public login(data: User): Observable<User> {
    const auth$ = new Subject<User>();
    this.httpClient.post<any>(this.loginUri, { login: data.email, password: data.password },
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' })
      .subscribe((response: any) => {
        const user: User = { email: data.email, password: data.password, token: response.body.token };
        auth$.next(user);
      },
        (error) => {
          auth$.error(error);
        });
    return auth$.asObservable();
  }
}
