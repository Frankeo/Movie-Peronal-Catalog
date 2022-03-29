import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpsCallable, Functions } from '@angular/fire/functions';
import { Observable, from } from 'rxjs';

import { MovieSummary, MovieTitle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private func: Functions) { }

  getTitlesWithIds(partialName: string): Observable<MovieTitle[]> {
    const getTitles = httpsCallable(this.func, 'getTitlesWithIds');
    return from(getTitles(partialName).then(result => result.data as MovieTitle[]));
  }

  getMovieOverview(id: string): Observable<MovieSummary> {
    const getTitles = httpsCallable(this.func, 'getMovieOverview');
    return from(getTitles(id).then(result => result.data as MovieSummary));
  }
}
