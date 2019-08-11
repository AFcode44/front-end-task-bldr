import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { Logout } from 'src/app/auth/actions/auth.actions';
import { LoadMovies, TotalMoviesSet } from 'src/app/movies/movies.actions';
import { getMovies, getMovieFilters } from 'src/app/movies/movies.selectors';
import { Observable, Subscription } from 'rxjs';
import { MoviesEffects } from 'src/app/movies/effects/movies.effects';
import { FilterBy, FilterOrder } from '../filter-box/filter-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public availableMovies = new Array<MoviesInterface>();
  public movies$ = new Observable<MoviesInterface[]>();
  public filterOrder = FilterOrder.DESCENDING;
  public filterBy = FilterBy.TITLE;

  public moviesNumberPerPage = '0';
  public totalNumberOfMovies;
  public numberOfPages = [0];
  public selectedPage = 0;

  private moviesEffectsSub: Subscription;
  private filterSub: Subscription;

  constructor(private readonly store: Store<AppState>, private readonly moviesService: MoviesService,
    private moviesEffects: MoviesEffects) {
  }

  ngOnInit() {
    this.movies$ = this.store.pipe(
      select(getMovies)
    );
    this.moviesEffectsSub = this.moviesEffects.initFilter$
      .subscribe((val) => {
        this.filterOrder = val.filterSettings.filter.sortOrder;
        this.filterBy = val.filterSettings.filter.sortBy;
      });

    this.fetchMovies(true);

    this.filterSub = this.store.pipe(
      select(getMovieFilters)
    ).subscribe(val => {
      if (val && val.sortBy && ((val.sortOrder !== this.filterOrder) || (val.sortBy !== this.filterBy))) {
        this.resetPaging();
      }
      if (val && val.sortBy) {
        this.filterOrder = val.sortOrder;
        this.filterBy = val.sortBy;
      }
    });
  }

  public ngOnDestroy(): void {
    this.moviesEffectsSub.unsubscribe();
    this.filterSub.unsubscribe();
  }

  public onLogOut(): void {
    this.store.dispatch(new Logout());
  }

  public onMoviesNumber(event): void {
    const numb = parseInt(this.moviesNumberPerPage, 10);
    if (event.which === 13 && !isNaN(numb) ) {
      const pagesNumber = Math.ceil(this.totalNumberOfMovies / Number(this.moviesNumberPerPage));
      this.numberOfPages = [];
      for (let i = 0; i < pagesNumber; i++) {
        this.numberOfPages.push(i);
      }
      this.fetchMovies();
    }
  }

  public onPageClick(item: number): void {
    if (this.selectedPage !== item) {
      this.selectedPage = item;
      this.fetchMovies();
    }
  }

  public onPrevClick(): void {
    if (this.selectedPage - 1 >= 0) {
      this.onPageClick(this.selectedPage - 1);
    }
  }

  public onNextClick(): void {
    if ((this.selectedPage + 1) < this.numberOfPages.length) {
      this.onPageClick(this.selectedPage + 1);
    }
  }

  private fetchMovies(isTotalMovies?: boolean): void {
    this.moviesService.fetchMovies(this.getUri()).subscribe((movies: Array<MoviesInterface>) => {
      if (isTotalMovies) {
        this.totalNumberOfMovies = movies.length;
        this.store.dispatch(new TotalMoviesSet({ amount: movies.length }));
      }
      this.store.dispatch(new LoadMovies({ movies }, { filters: { sortBy: this.filterBy, sortOrder: this.filterOrder } }));
    });
  }

  private getUri(): string {
    return `https://marblejs-example.herokuapp.com/api/v1/movies?limit=${
      this.moviesNumberPerPage}&page=${this.selectedPage + 1}&sortBy=${this.filterBy}&sortDir=${this.filterOrder}`;
  }

  private resetPaging(): void {
    this.moviesNumberPerPage = '0';
    this.numberOfPages = [0];
    this.selectedPage = 0;
  }
}
