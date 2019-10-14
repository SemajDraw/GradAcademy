import {Movie} from './movie';
import {PriceCode} from './price-code';

export class Rental {
  constructor(public movie: Movie, public daysRented: number) {
  }

  calculateFrequentRenterPoints(): number {
    return this.isBonusApplicable() ? 2 : 1;
  }

  private isBonusApplicable(): boolean {
    return this.movie.priceCode === PriceCode.NewRelease && this.daysRented > 1;
  }

  calculateCost(): number {
    let thisAmount = 0;
    switch (this.movie.priceCode) {
      case PriceCode.Regular:
        thisAmount += 2;
        if (this.daysRented > 2) {
          thisAmount += (this.daysRented - 2) * 1.5;
        }
        break;
      case PriceCode.NewRelease:
        thisAmount += this.daysRented * 3;
        break;
      case PriceCode.Childrens:
        thisAmount += 1.5;
        if (this.daysRented > 3) {
          thisAmount += (this.daysRented - 3) * 1.5;
        }
        break;
    }
    return thisAmount;
  }
}
