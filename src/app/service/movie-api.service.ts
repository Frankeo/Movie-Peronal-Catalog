import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ImDBResult, ImDBFindResponse, MovieSummary, ImDBDetailResponse, MovieTitle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private url = "https://imdb8.p.rapidapi.com";
  private headers = {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '9ba6592aeemsh633be5bdfd3c764p1c9d2cjsn328075020874'
  };
  constructor(private httpClient: HttpClient) { }

  getTitlesWithIds(partialName: string): Observable<MovieTitle[]> {
    return this.httpClient.get<ImDBFindResponse>(`${this.url}/auto-complete`, {
      headers: this.headers, params: { q: partialName }})
      .pipe(
        map(list => list.d.map(({ id, l }) => ({ id, title: l })))
    );
  }

  getMovieOverview(id: string): Observable<MovieSummary> {
    console.log(id);

    return this.httpClient.get<ImDBDetailResponse>(`${this.url}/title/get-overview-details`, {
      headers: this.headers, params: { tconst: id }})
      .pipe(
        map(result => {
          console.log(result);
          return ({
          genrer: result.genres[0],
          id: result.id,
          poster: result.title.image.url,
          title: result.title.title,
          sinopsis: result.plotSummary.text
        }) as MovieSummary; }
        )
      );
  }
}
