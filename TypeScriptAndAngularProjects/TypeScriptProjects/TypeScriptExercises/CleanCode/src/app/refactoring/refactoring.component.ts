import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {Rental} from './rental';
import {Customer} from './customer';

@Component({
  selector: 'app-refactoring',
  templateUrl: './refactoring.component.html',
  styleUrls: ['./refactoring.component.css']
})
export class RefactoringComponent implements OnInit {
  output = '';

  constructor() {
  }

  ngOnInit(): void {
    let peterPan = new Movie('Peter Pan', 'CHILDRENS');
    let theHulk = new Movie('The Hulk', 'REGULAR');
    let starWars = new Movie('Star Wars', 'REGULAR');
    let toyStory = new Movie('Toy Story', 'CHILDRENS');
    let killBill = new Movie('Kill Bill', 'NEW_RELEASE');

    let r1 = new Rental(peterPan, 2);
    let r2 = new Rental(theHulk, 1);
    let r3 = new Rental(starWars, 3);
    let r4 = new Rental(toyStory, 2);
    let r5 = new Rental(killBill, 4);

    let customer = new Customer('Joe Bloggs');
    customer.addRental(r1);
    customer.addRental(r2);
    customer.addRental(r3);
    customer.addRental(r4);
    customer.addRental(r5);

    this.output = customer.statement();
  }
}
