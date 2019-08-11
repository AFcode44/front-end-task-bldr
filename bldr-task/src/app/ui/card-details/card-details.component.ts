import { Component, OnInit, Input } from '@angular/core';
import { MoviesInterface, ActorInterface } from 'src/app/shared/services/movies/movies.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectMovie } from 'src/app/movie-details/movie-details.selectors';
import { filter } from 'rxjs/operators';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  // public movieInfo: MoviesInterface;
  // public myMovie$: Observable<MoviesInterface>;
  public movieInfo: MoviesInterface;
  public actorsList: Array<ActorInterface>;

  public isVisible = false;
  // @Input() public set movieDesc(movieData: MoviesInterface) {
  //   console.error('dostalem', movieData);
  //   this.movieInfo = movieData;
  //   // this.movieInfo.
  // }
  constructor(private readonly store: Store<AppState>, private moviesService: MoviesService,
    private router: Router) {
    console.error('tworzy się Details');
  }

  ngOnInit() {
    // this.myMovie$ = this.store.pipe(
    //   select(selectMovie)
    //   // map((movie: MovieDetailsState) => movie.movieNumber === (this.myNumber + 1) )
    // );
    /*this.myMovie$ = */this.store.pipe(
      select(selectMovie),
      filter(movie => movie.selectedMovie !== undefined)
      // map((movie: MovieDetailsState) => movie.movieNumber === (this.myNumber + 1) )
    ) .subscribe((movie) => {
      console.error('co tu jest', movie.selectedMovie);
        this.movieInfo = movie.selectedMovie;
        this.actorsList = this.movieInfo.actors;

        this.moviesService.fetchActor(this.movieInfo.actors[0].imdbId);
      // this.isVisible = true;
    });
  }

  public onTitleClick(): void {
    //tt0816711
    console.error('klika', this.movieInfo.imdbId, this.movieInfo);
    window.location.href = `https://www.imdb.com/title/${this.movieInfo.imdbId}`;
    // this.router.navigateByUrl(`https://www.imdb.com/name/${this.actorsList[0].imbdId}`);
    // http://www.omdbapi.com/?i=tt0266697&apikey=6ba74a8a

  }

  public onActorClick(actor: ActorInterface): void {
    console.error('aktor', actor,actor.imdbId);
    window.location.href = `https://www.imdb.com/name/${actor.imdbId}`;
  }

  public onCloseClick(): void {
    this.movieInfo = undefined;
  }
}
