import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diamonds',
  templateUrl: './diamonds.component.html',
  styleUrls: ['./diamonds.component.css']
})
export class DiamondsComponent {
  input = 0;
  output = '';

  get height() {
    return (this.input * 2) + 1;
  }

  // Output a diamond of height 'height' as a text block.
  // The height will always be odd
  // Simply append to the string this.output to show the result
  execute() {

  }
}
