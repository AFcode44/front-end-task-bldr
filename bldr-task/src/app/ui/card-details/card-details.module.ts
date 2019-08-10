import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardDetailsComponent } from './card-details.component';

@NgModule({
  declarations: [
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CardDetailsComponent
  ],
  providers: [],
})
export class CardDetailsModule { }
