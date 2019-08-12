import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule, By } from '@angular/platform-browser';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { SearchBoxComponent, FilterBy, FilterOrder } from './filter-box.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  const moviesServiceMock = {
    fetchMovies: function() { }
  };
  let store: MockStore<{movies: []}>;

  let fetchMoviesSpy;
  beforeEach(async(() => {
    fetchMoviesSpy = spyOn(moviesServiceMock, 'fetchMovies').and.returnValue(new Observable<any>());
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule
      ],
      declarations: [ SearchBoxComponent ],
      providers: [provideMockStore(),
        { provide: MoviesService, useValue: moviesServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    store.setState({movies: []});
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set filter order to title after onTitile', () => {
    fixture.debugElement.query(By.css('.inp-title')).triggerEventHandler('click', {});
    expect(component.filterBy).toEqual(FilterBy.TITLE);
    expect(fetchMoviesSpy).toHaveBeenCalled();
  });

  it('should set filter order to year after onYear', () => {
    fixture.debugElement.query(By.css('.inp-year')).triggerEventHandler('click', {});
    expect(component.filterBy).toEqual(FilterBy.YEAR);
    expect(fetchMoviesSpy).toHaveBeenCalled();
  });

  it('should set filter to metascore after onMetascore', () => {
    fixture.debugElement.query(By.css('.inp-meta')).triggerEventHandler('click', {});
    expect(component.filterBy).toEqual(FilterBy.METASCORE);
    expect(fetchMoviesSpy).toHaveBeenCalled();
  });

  it('should set filtering order to ascending after onYear', () => {
    fixture.debugElement.query(By.css('.inp-asc')).triggerEventHandler('click', {});
    expect(component.filterOrder).toEqual(FilterOrder.ASCENDING);
    expect(fetchMoviesSpy).toHaveBeenCalled();
  });

  it('should set filtering order to descending after onMetascore', () => {
    fixture.debugElement.query(By.css('.inp-desc')).triggerEventHandler('click', {});
    expect(component.filterOrder).toEqual(FilterOrder.DESCENDING);
    expect(fetchMoviesSpy).toHaveBeenCalled();
  });
});
