import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SearchBoxModule } from '../filter-box/filter-box.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';
import { CardDetailsModule } from '../card-details/card-details.module';
import { StoreModule, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MoviesEffects } from 'src/app/movies/effects/movies.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let actions$: Observable<Action>;
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
        [provideMockActions(() => actions$)],
        StoreModule.forRoot({})
      ],
      declarations: [ HomeComponent ]
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
});
