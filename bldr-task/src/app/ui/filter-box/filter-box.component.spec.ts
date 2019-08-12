import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule, By } from '@angular/platform-browser';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { SearchBoxComponent } from './filter-box.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  const moviesServiceMock = {
  };
  let store: MockStore<{}>;
  beforeEach(async(() => {


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
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
