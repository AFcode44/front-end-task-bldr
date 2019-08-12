import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SearchBoxModule } from '../filter-box/filter-box.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';
import { CardDetailsModule } from '../card-details/card-details.module';
import { StoreModule, Action, Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';
import { MoviesEffects } from 'src/app/movies/effects/movies.effects';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { MovieFilterApply, MoviesActionTypes } from 'src/app/movies/movies.actions';
import { FilterBy, FilterOrder } from '../filter-box/filter-box.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // let store: MockStore<{ movies: [] }>;
  const filterApply$ = new Subject<MovieFilterApply>();
  const mockEffects = {
    initFilter$: filterApply$
  };

  const moviesServiceMock = {
    fetchMovies: function () { return new Observable<any>() }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        SearchBoxModule,
        CardModule,
        CardDetailsModule,
        HttpClientModule,
        StoreModule.forFeature('movies', () => { }),
        StoreModule.forRoot({})
      ],
      providers: [
      { provide: MoviesEffects, useValue: mockEffects },
      { provide: MoviesService, useValue: moviesServiceMock }
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply sort order on init', () => {
    const sortOrder: MovieFilterApply = {
      filterSettings: {
        filter:
          { sortBy: FilterBy.METASCORE, sortOrder: FilterOrder.ASCENDING }
      }, type: MoviesActionTypes.FilterMovieAction
    };

    filterApply$.next(sortOrder);

    expect(component.filterBy).toEqual(sortOrder.filterSettings.filter.sortBy);
    expect(component.filterOrder).toEqual(sortOrder.filterSettings.filter.sortOrder);
  });

});
