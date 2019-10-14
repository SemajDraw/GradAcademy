import {Component} from '@angular/core';
import {orderBy} from 'lodash';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-unique-words',
  templateUrl: './unique-words.component.html',
  styleUrls: ['./unique-words.component.css']
})
export class UniqueWordsComponent {
  input = '';
  output = '';

  constructor(private http: HttpClient) {
    this.initialiseSampleText();
  }

  private initialiseSampleText() {
    this.http.get('assets/dickens.txt', {responseType: 'text'})
      .subscribe(x => this.input = x);
  }

  // Output the unique words found in input with the number of times they occur.
  // Simply append to the string this.output to show the result
  // Lodash may be useful here - note it doesn't work with iterables
  execute() {

  }
}
