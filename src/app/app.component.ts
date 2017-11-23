import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jedzenie Agaty';

  authState: Observable<firebase.User>;
  userLogged: boolean = false;
  afAuth: AngularFireAuth;

  errorMessage : string;

  constructor(afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
  }

  ngOnInit() {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(u=>{
      this.userLogged = u != null;
    }) 
  }

  login() {
    let that = this;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function (result) {
      that.userLogged = true;
    }, function (error) {
      that.errorMessage = error.message;
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
