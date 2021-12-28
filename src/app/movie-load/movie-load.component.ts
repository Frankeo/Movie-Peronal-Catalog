import { Component } from '@angular/core';
import { MovieSummary } from '../interfaces/types';

@Component({
  selector: 'app-movie-load',
  templateUrl: './movie-load.component.html',
  styleUrls: ['./movie-load.component.css']
})

export class MovieLoadComponent {
  movie: MovieSummary = {
    gender: '',
    title: '',
    id: '',
    poster: '',
    ranking: 0,
    sinopsis: ''
  };

  SeePreview() {
    console.log("See Preview");
    this.movie.title = "bla";
  }
}
