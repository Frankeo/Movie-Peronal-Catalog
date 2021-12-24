import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieLoadComponent } from './movie-load/movie-load.component';

const routes: Routes = [
  { path: 'detail', component: MovieDetailComponent },
  { path: 'list', component: MovieListComponent },
  { path: 'load', component: MovieLoadComponent },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
