import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesInterface, ActorInterface } from 'src/app/shared/services/movies/movies.interface';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectMovie } from 'src/app/movie-details/movie-details.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

  public movieInfo: MoviesInterface;
  public actorsList: Array<ActorInterface>;
  public isVisible = false;

  private storeSub: Subscription;
  constructor(private readonly store: Store<AppState>) {
  }

  ngOnInit() {
    this.storeSub = this.store.pipe(
      select(selectMovie),
      filter(movie => movie.selectedMovie !== undefined)
    ) .subscribe((movie) => {
        this.movieInfo = movie.selectedMovie;
        this.actorsList = this.movieInfo.actors;
    });
  }

  public ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  public onTitleClick(): void {
    window.location.href = `https://www.imdb.com/title/${this.movieInfo.imdbId}`;
  }

  public onActorClick(actor: ActorInterface): void {
    window.location.href = `https://www.imdb.com/name/${actor.imdbId}`;
  }

  public onCloseClick(): void {
    this.movieInfo = undefined;
  }
}
