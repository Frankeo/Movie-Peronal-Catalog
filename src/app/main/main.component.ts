import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  links = [
    { title: "My Movies", path: '/list', icon: 'list' },
    { title: "Add new Movie", path: '/load', icon: 'movie' }
  ]
  constructor() { }
}
