import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material.module';
import { MovieLoadComponent } from './movie-load/movie-load.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { MovieSummaryComponent } from './movie-list/movie-summary/movie-summary.component';
import { MovieSearchBarComponent } from './movie-list/movie-search-bar/movie-search-bar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    MovieLoadComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieSummaryComponent,
    MovieSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
