import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieLoadComponent } from './movie-load/movie-load.component';

const routes: Routes = [
  { path: 'detail', component: MovieDetailComponent },
  { path: 'list', component: MovieListComponent },
  { path: 'load', component: MovieLoadComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
