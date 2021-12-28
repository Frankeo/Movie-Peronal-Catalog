import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  @Output() SeePreview = new EventEmitter();

  form: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({});
   }
}
