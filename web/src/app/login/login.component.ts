import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthProvider, browserLocalPersistence, browserSessionPersistence, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: Auth, private router: Router) {}

  login(provider: AuthProvider) {
    signInWithPopup(this.auth, provider)
    .then(result => {
      this.auth.updateCurrentUser(result.user);
      console.log('Nice, it worked!');
      this.router.navigate(['/list']);
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  googleLogin() { this.login(new GoogleAuthProvider()) }
  facebookLogin() { this.login(new FacebookAuthProvider()) }
  githubLogin() { this.login(new GithubAuthProvider()) }
}
