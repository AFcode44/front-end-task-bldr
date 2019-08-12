import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { MoviesInterface } from 'src/app/shared/services/movies/movies.interface';
import { Store } from '@ngrx/store';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const storeMock = {
    dispatch: function() {}
  };

  let dispatchSpy;
  const fakeData: MoviesInterface = {
    actors: [{name: 'actorName', imdbId: 'imdbId'}],
    director: 'director',
    genres: ['genres'],
    imdbId: 'imdbId',
    metascore: 90,
    posterUrl: 'posterUrl',
    title: 'title',
    year: 1000,
  };
  beforeEach(async(() => {
    dispatchSpy = spyOn(storeMock, 'dispatch');
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [
        { provide: Store, useValue: storeMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.movieDesc = fakeData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit SelectMovie action on card click', () => {
    fixture.debugElement.query(By.css('.card-container')).triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.detailsVisible).toEqual(true);
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
