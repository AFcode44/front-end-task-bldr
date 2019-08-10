import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageComponent } from 'src/app/ui/login-page/login-page.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { UserService } from '../shared/services/user/user.service';

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
