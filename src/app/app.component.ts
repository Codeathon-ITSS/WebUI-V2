import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Codeathon';
  token: string | null = "";

  constructor(private auth: AngularFireAuth) { }

  async loginWithGoogle() {
    let provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      this.auth.idToken.subscribe((idToken) => {
        this.token = idToken;
        console.log(this.token);
      });

    }
    catch (err) {
      console.error(err);
    }
  }
}
