import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { concatMap, elementAt, filter, flatMap, map, mergeMap, Observable } from 'rxjs';
import { MovieSummary, MovieUploaded, ImDBResult, ImDBFindResponse, MovieTitle } from 'src/app/interfaces/interfaces';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  titleControl = new FormControl();
  ratingControl = new FormControl();
  movieForm: FormGroup;
  filteredOptions$ = new Observable<MovieTitle[]>();
  options$ = new Observable<MovieTitle[]>();

  @Output() SeePreview = new EventEmitter();

  constructor(private movieApiService: MovieApiService) {
    this.movieForm = new FormGroup({
      titleControl: this.titleControl,
      ratingControl: this.ratingControl,
    });
   }

  findTitle(partialTitle: string) {
    if (typeof(partialTitle) !== 'string' || partialTitle.length < 3) return;
    else if (partialTitle.length === 3) {
      this.options$ = this.movieApiService.getTitlesWithIds(partialTitle);
      this.filteredOptions$ = this.options$;
    }
    else
      this.filteredOptions$ = this.filterByTitle(partialTitle);
  }

  private filterByTitle(partialTitle: string) {
    console.log(partialTitle)
     return this.options$
      .pipe(
        map(options => options
          .filter(option => option.title.toLowerCase().includes(partialTitle.toLowerCase()))));
  }

  displayTitle(movie: MovieTitle) {
    return movie && movie.title ? movie.title : '';
  }

  onSubmit() {
    const movieUploaded = {
      ...this.titleControl.value,
      ranking: this.ratingControl.value
    }
    this.SeePreview.emit(movieUploaded);
  }

}
