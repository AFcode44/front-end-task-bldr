import { Component, OnInit, Input } from '@angular/core';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectMovie } from 'src/app/movie-details/movie-details.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  // public movieInfo: MoviesInterface;
  public myMovie$: Observable<MoviesInterface>;

  public isVisible = false;
  // @Input() public set movieDesc(movieData: MoviesInterface) {
  //   console.error('dostalem', movieData);
  //   this.movieInfo = movieData;
  //   // this.movieInfo.
  // }
  constructor(private readonly store: Store<AppState>) {
    console.error('tworzy się Details');
  }

  ngOnInit() {
    // this.myMovie$ = this.store.pipe(
    //   select(selectMovie)
    //   // map((movie: MovieDetailsState) => movie.movieNumber === (this.myNumber + 1) )
    // );
    this.store.pipe(
      select(selectMovie),
      filter(movie => movie.selectedMovie !== undefined)
      // map((movie: MovieDetailsState) => movie.movieNumber === (this.myNumber + 1) )
    ).subscribe((selectedMovie) => {

      this.isVisible = true;
    });
  }

}
