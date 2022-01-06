import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSummary, MovieUploaded, ImDBResult } from '../interfaces/interfaces';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-movie-load',
  templateUrl: './movie-load.component.html',
  styleUrls: ['./movie-load.component.css']
})

export class MovieLoadComponent {
  movie: MovieSummary = {
    genrer: '',
    title: '',
    id: '',
    poster: '',
    ranking: 0,
    sinopsis: ''
  };

  constructor(private movieApiService: MovieApiService) {}

  SeePreview(movieUploaded: MovieUploaded) {
    this.movieApiService.getMovieOverview(movieUploaded.id)
      .subscribe(result => 
        this.movie = {
          ...result,
          ranking: movieUploaded.ranking
        });
  }
}
