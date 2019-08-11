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
    this.httpClient.get<any>(uri ? uri : this.getMoviesUri, { headers: { 'Authorization': `Bearer ${user.token}` } }).pipe(
      map((list) => list.collection)
    )
      .subscribe((response: Array<MoviesInterface>) => {
        movieList$.next(response);
      },
        (error) => {
        });
    return movieList$;
  }

  public fetchActor(id: string): Observable<any> {
    const movieList$ = new Subject<any>();
    this.httpClient.get<any>(`http://www.omdbapi.com/?i=tt0266697&apikey=6ba74a8a`, { headers: { 'X-RapidAPI-Key': '6ba74a8a' } })
      .subscribe((response: any) => {
        movieList$.next(response);
      },
        (error) => {
        });
    return movieList$;
  }

}
