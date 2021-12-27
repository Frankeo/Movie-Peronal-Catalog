import { Component, OnInit } from '@angular/core';
import { MovieSummary } from '../interfaces/types';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies: MovieSummary[] = [
    {
      id: "BLA BLA",
      gender: "Horror",
      poster: "https://static.posters.cz/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
      ranking: 5,
      sinopsis: "BLA BLA BLA",
      title: "Avengers End Game"
    },
    {
      id: "BLA BLA",
      gender: "Comedy",
      poster: "https://m.media-amazon.com/images/I/71xZtfOsHdL._AC_SY679_.jpg",
      ranking: 5,
      sinopsis: "BLA BLA BLA",
      title: "Avengers Ultron"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
