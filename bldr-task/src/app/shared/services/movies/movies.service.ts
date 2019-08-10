import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../user/user.interface';
import { MoviesInterface } from './movies.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private getMoviesUri = 'https://marblejs-example.herokuapp.com/api/v1/movies';

  public constructor(private httpClient: HttpClient) { }

  public fetchMovies(uri?: string): Observable<any> {
    const movieList$ = new Subject<Array<MoviesInterface>>();
    const user: User = JSON.parse(sessionStorage.getItem('userData')).user;
    console.error('pytam o:', user.token);
    this.httpClient.get<any>(uri ? uri : this.getMoviesUri, { headers: { 'Authorization': `Bearer ${user.token}` } }).pipe(
      map((list) => list.collection)
    )
    .subscribe((response: Array<MoviesInterface>) => {
        console.error('films response', response);
        console.error('films response', response[2].director);
        movieList$.next(response);
        // this.httpClient.get<any>('http://www.omdbapi.com/?apikey=[yourkey]&', { headers: { 'Authorization': `Bearer ${user.token}` } })
        //   .subscribe((response: any) => {

        //   }, (error) => {

        //   });
        // const user: User = { email: data.email, password: data.password, token: response.body.token };
        // auth$.next(user);
      },
        (error) => {
          console.error('films error', error);
          // auth$.error(error);
        });
    return movieList$;
  }


}
