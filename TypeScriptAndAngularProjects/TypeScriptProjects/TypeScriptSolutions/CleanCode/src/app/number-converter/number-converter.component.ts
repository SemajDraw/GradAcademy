import {Component} from '@angular/core';

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.css']
})
export class NumberConverterComponent {
  input = 0;
  output = '';

  numbers = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety']
  ]);

  // Output the number input in its English form.
  // Math.trunc will be useful as JavaScript has no integer type.
  // Simply append to the string this.output to show the result
  execute() {
    const value = Number(this.input);
    this.output = [
      this.thousands(value),
      this.hundreds(value),
      this.and(value),
      this.tens(value)
    ].join('');
  }

  private thousands(value: number): string {
    // e.g. 1230 -> 1
    const thousands = Math.trunc(value / 1000);
    if (thousands > 0) {
      return this.numbers.get(thousands) + ' thousand ';
    }
    return '';
  }

  private hundreds(value: number): string {
    // e.g. 1230 -> 230 -> 2
    const hundreds = Math.trunc((value % 1000) / 100);
    console.log(hundreds);
    if (hundreds > 0) {
      return this.numbers.get(hundreds) + ' hundred ';
    }
    return '';
  }

  private and(value: number): string {
    if ((value > 100) && ((value % 100) > 0)) {
      return 'and ';
    }
    return '';
  }

  private tens(value: number): string {
    // e.g. 121 -> 21
    const remainder = Math.trunc(value % 100);
    console.log(remainder);
    if (remainder > 20) {
      // e.g. 21 -> 2 -> 20
      const tens = Math.trunc(remainder / 10) * 10;
      return this.numbers.get(tens) + this.units(value);
    }
    return (remainder > 0) ? this.numbers.get(remainder) : '';
  }

  private units(value: number) {
    const units = Math.trunc(value % 10);
    if (units > 0) {
      return ' ' + this.numbers.get(units);
    }
    return '';
  }
}
