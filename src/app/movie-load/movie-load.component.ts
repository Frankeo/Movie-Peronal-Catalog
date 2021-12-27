import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-load',
  templateUrl: './movie-load.component.html',
  styleUrls: ['./movie-load.component.css']
})

export class MovieLoadComponent {
  form: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({});
   }

  saveDetails() {}

}
