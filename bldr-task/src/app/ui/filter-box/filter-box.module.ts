import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './filter-box.component';

@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchBoxComponent
  ],
  providers: [],
})
export class SearchBoxModule { }
