import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {Rental} from './rental';
import {Customer} from './customer';
import {PriceCode} from './price-code';

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
    const peterPan = new Movie('Peter Pan', PriceCode.Childrens);
    const theHulk = new Movie('The Hulk', PriceCode.Regular);
    const starWars = new Movie('Star Wars', PriceCode.Regular);
    const toyStory = new Movie('Toy Story', PriceCode.Childrens);
    const killBill = new Movie('Kill Bill', PriceCode.NewRelease);

    const customer = new Customer('Joe Bloggs');
    customer.addRentals(
      new Rental(peterPan, 2),
      new Rental(theHulk, 1),
      new Rental(starWars, 3),
      new Rental(toyStory, 2),
      new Rental(killBill, 4)
    );

    this.output = customer.statement();
  }
}
