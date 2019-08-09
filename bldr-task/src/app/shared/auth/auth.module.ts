import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AuthGuard } from '../guards/auth-guard.service';
import { UserService } from './user.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [AuthGuard, UserService],
})
export class AuthModule { }
