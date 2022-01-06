import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material.module';
import { MovieLoadComponent } from './movie-load/movie-load.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { MovieSummaryComponent } from './movie-summary/movie-summary.component';
import { MovieSearchBarComponent } from './movie-list/movie-search-bar/movie-search-bar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieFormComponent } from './movie-load/movie-form/movie-form.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth, connectAuthEmulator, Auth  } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator, Functions } from '@angular/fire/functions';
import { providePerformance,getPerformance } from '@angular/fire/performance';

const configEmulatorAuth = (auth: Auth) : Auth => {
  if (environment.production) return auth;
  connectAuthEmulator(auth, environment.emulators.auth);
  return auth;
}

const configEmulatorFunctions = (func: Functions) : Functions => {
  if (environment.production) return func;
  const { host, port } = environment.emulators.functions
  connectFunctionsEmulator(func, host, port);
  return func;
}

@NgModule({
  declarations: [
    MainComponent,
    MovieLoadComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieSummaryComponent,
    MovieSearchBarComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => configEmulatorAuth(getAuth())),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => configEmulatorFunctions(getFunctions())),
    providePerformance(() => getPerformance())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [MainComponent]
})



export class AppModule { }
