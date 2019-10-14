import {Component} from '@angular/core';

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.css']
})
export class NumberConverterComponent {
  input = 0;
  output = '';

  // Output the number input in its English form.
  // Math.trunc will be useful as JavaScript has no integer type.
  // Simply append to the string this.output to show the result
  execute() {
    const value = Number(this.input);

  }
}
