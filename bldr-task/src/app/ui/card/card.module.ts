import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import { SearchBoxModule } from '../filter-box/filter-box.module';
import { StoreModule } from '@ngrx/store';
import * as fromMovieDetails from '../../movie-details/reducers/movie-details.reducer';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SearchBoxModule,
    StoreModule.forFeature(fromMovieDetails.movieDetailsFeatureKey, fromMovieDetails.movieDetailsReducer)
  ],
  exports: [
    CardComponent
  ],
  providers: [],
})
export class CardModule { }
