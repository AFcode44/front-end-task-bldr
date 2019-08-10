import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { Logout } from 'src/app/auth/actions/auth.actions';
import { LoadMovies } from 'src/app/movies/movies.actions';
import { getMovies } from 'src/app/movies/movies.selectors';
import { Observable } from 'rxjs';
import { initialState } from 'src/app/movies/reducers/movies.reducer';
import { MoviesEffects } from 'src/app/movies/effects/movies.effects';
import { FilterInterface } from 'src/app/shared/services/movies/filter.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public availableMovies = new Array<MoviesInterface>();
  public movies$ = new Observable<MoviesInterface[]>();
  // public filters$ = new Observable<FilterInterface>;
  public initFilter: FilterInterface;
  public defaultUri: string;
  public imagesList = [
    `url('/assets/Ramen-Enthusiast.svg')`,
    `url('/assets/and-so-the-adventure-begins.svg')`,
    `url('/assets/autumn-leaves-and-pumpkins-please.svg')`,
    `url('/assets/back-to-school.svg')`,
    `url('/assets/worlds-best-grandma.svg')`,
    `url('/assets/cat-dad.svg')`,
    `url('/assets/dreams-dont-work-unless-you-do.svg')`,
    `url('/assets/I-dont-do-mornings.svg')`,
    `url('/assets/life-is-better-around-the-campfire.svg')`,
    `url('/assets/mommin-aint-easy.svg')`,
    `url('/assets/Home is where cats are-01.svg')`,
  ];

  public imagesCounter = 0;

  constructor(private readonly store: Store<AppState>,
    /*private router: Router,*/ private readonly moviesService: MoviesService,
    private moviesEffects: MoviesEffects) {

  }

  ngOnInit() {
    this.store.subscribe((state: AppState) => {
      console.error('stan:', state);
    });
    this.movies$  = this.store.pipe(
      select(getMovies)
    );
    /*this.filters$ = */this.moviesEffects.initFilter$
    .subscribe((val) => {
      this.initFilter = val.filterSettings.filter;
      console.error('output z selectora:', val);
    });
    this.moviesService.fetchMovies(this.getUri()).subscribe((movies: Array<MoviesInterface>) => {
      console.error('filtry ustawione na:', this.initFilter);
      this.store.dispatch(new LoadMovies({ movies }, {filters: this.initFilter}));
    });
  }

  public onLogOut(): void {
    // this.userService.logOut();
    this.store.dispatch(new Logout());
    // this.router.navigateByUrl('/login');

  }


  public getImageUrl(): string {
    if (this.imagesCounter >= this.imagesList.length) {
      this.imagesCounter = 0;
    }
    const retVal = this.imagesList[this.imagesCounter];
    this.imagesCounter++;

    return retVal;
  }

  public getUri(): string {
    if (this.initFilter.sortBy) {
      return `https://marblejs-example.herokuapp.com/api/v1/movies?sortBy=${this.initFilter.sortBy}&sortDir=${this.initFilter.sortOrder}`;
    } else {
    return `https://marblejs-example.herokuapp.com/api/v1/movies`;

    }
  }
}
