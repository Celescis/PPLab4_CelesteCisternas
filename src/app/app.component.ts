import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PP.LAB4.CisternasCeleste';

  constructor() {
    firebase.initializeApp(environment.firebase);
  }
}
