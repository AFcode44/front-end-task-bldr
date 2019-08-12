import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getMovies, getMovieFilters } from 'src/app/movies/movies.selectors';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { LoadMovies, MovieFilterApply } from 'src/app/movies/movies.actions';
import { Subscription } from 'rxjs';


export enum FilterBy {
  TITLE = 'title',
  YEAR = 'year',
  METASCORE = 'metascore'
}
export enum FilterOrder {
  ASCENDING = '1',
  DESCENDING = '-1'
}

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  public moviesList: Array<MoviesInterface>;
  public searchValue = '';
  public filterOrder = FilterOrder.DESCENDING;
  public filterBy = FilterBy.TITLE;

  private storeSub: Subscription;
  constructor(private readonly store: Store<AppState>, private readonly moviesService: MoviesService) { }

  ngOnInit() {
    this.storeSub = this.store.pipe(
      select(getMovies)
    ).subscribe((list: any) => {
      this.moviesList = list;
    });

    this.store.pipe(
      select(getMovieFilters)
    ).subscribe(val => {
      if (val && val.sortBy) {
        this.filterBy = val.sortBy;
        this.filterOrder = val.sortOrder;
      }

    });
  }
  public ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  public onTitle(): void {
    this.filterBy = FilterBy.TITLE;
    this.processRequest();
  }

  public onYear(): void {
    this.filterBy = FilterBy.YEAR;
    this.processRequest();
  }

  public onMetascore(): void {
    this.filterBy = FilterBy.METASCORE;
    this.processRequest();
  }

  public onDescending(): void {
    this.filterOrder = FilterOrder.DESCENDING;
    this.processRequest();
  }

  public onAscending(): void {
    this.filterOrder = FilterOrder.ASCENDING;
    this.processRequest();
  }

  private processRequest(): void {
    this.store.dispatch(new MovieFilterApply({ filter: { sortBy: this.filterBy, sortOrder: this.filterOrder } }));
    const uri = `https://marblejs-example.herokuapp.com/api/v1/movies?sortBy=${this.filterBy}&sortDir=${this.filterOrder}`;

    this.moviesService.fetchMovies(uri).subscribe((movies: Array<MoviesInterface>) => {
      this.store.dispatch(new LoadMovies({ movies }, { filters: { sortBy: this.filterBy, sortOrder: this.filterOrder }}));
    });
  }
}
