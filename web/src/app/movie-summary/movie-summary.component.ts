import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieSummary } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.css']
})
export class MovieSummaryComponent implements OnInit {
  @Input() movie: MovieSummary = {
    genrer: '',
    title: '',
    id: '',
    poster: '',
    ranking: 0,
    sinopsis: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails() {
    this.router.navigate(['/detail']);
  }
}
