import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SearchBoxModule } from '../filter-box/filter-box.module';
import { CardModule } from '../card/card.module';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import { StoreModule } from '@ngrx/store';
import * as fromMovies from '../../movies/reducers/movies.reducer';
import { CardDetailsModule } from '../card-details/card-details.module';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../../movies/effects/movies.effects';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SearchBoxModule,
    CardModule,
    CardDetailsModule,
    StoreModule.forFeature(fromMovies.moviesFeatureKey, fromMovies.moviesReducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  exports: [
    HomeComponent
  ],
  providers: [MoviesService],
})
export class HomeModule { }
