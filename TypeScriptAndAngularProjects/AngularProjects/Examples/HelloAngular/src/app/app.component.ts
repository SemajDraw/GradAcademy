import {Component} from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  template: '<h1 (click)="myHandler($event)">{{message}}{{myThing}}</h1>'
})
export class AppComponent {
  message: string;
  myThing: string;

  constructor() {
    this.message = 'Hello from Angular 2 (please click me)';
    this.myThing = 'Foobar';
  }

  myHandler(event) {
    this.message = 'Event handler called!';
    this.myThing = 'Coffee';
  }
}
