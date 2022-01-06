import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: User | null = null;

  links = [
    { title: "My Movies", path: '/list', icon: 'list' },
    { title: "Add new Movie", path: '/load', icon: 'movie' }
  ]

  constructor(private router: Router, private auth: Auth) { }

  ngOnInit(): void {
    this.auth.onAuthStateChanged(newUser => this.user = newUser);
  }

  signIn() { this.router.navigate(['/login']); }
  
  signOut() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }
}
