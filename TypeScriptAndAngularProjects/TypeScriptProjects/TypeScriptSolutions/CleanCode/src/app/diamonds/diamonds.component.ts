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
    this.output = '';
    const midpoint = (this.height + 1) / 2;
    let spaces = midpoint - 1;
    let stars = 1;

    const outputRow = () => this.output += `${' '.repeat(spaces)}${'*'.repeat(stars)}\n`;

    for (let ii = 0; ii < midpoint; ii++) {
      outputRow();
      spaces--;
      stars += 2;
    }

    spaces++;
    stars -= 2;

    for (let ii = 0; ii < midpoint - 1; ii++) {
      spaces++;
      stars -= 2;
      outputRow();
    }
  }

  outputMirroredRows(spaces: number, stars: number) {
    const row = this.getRow(spaces, stars);
    this.output = row + this.output + row;
  }

  private getRow(spaces: number, stars: number) {
    return `${' '.repeat(spaces)}${'*'.repeat(stars)}\n`;
  }

  execute2() {
    const midpoint = (this.height + 1) / 2;
    let stars = this.height;
    this.output = this.getRow(0, stars);

    for (let spaces = 1; spaces < midpoint; spaces++) {
      stars -= 2;
      this.outputMirroredRows(spaces, stars);
    }
  }
}
