import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { HomeComponent } from './ui/home/home.component';
import { LoginPageComponent } from './shared/auth/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'movies',
    // loadChildren: './ui//home/home.module',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    // loadChildren: './shared/auth/auth.module',
    component: LoginPageComponent
  },
  // { path: '404', component: PageNotFoundComponent },
  // { path: 'post/:id', canActivate: [AuthenticationGuard], component: PostDetailsComponent },
  { path: '**', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
