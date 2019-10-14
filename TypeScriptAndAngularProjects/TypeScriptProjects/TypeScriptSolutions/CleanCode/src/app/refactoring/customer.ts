import {Rental} from './rental';

const sum = <T>(total: any, current: T): T => total + current;

export class Customer {
  private rentals: Rental[] = [];

  constructor(public name: string) {
  }

  addRental(rental: Rental): void {
    this.rentals.push(rental);
  }

  addRentals(...rentals: Rental[]): void {
    rentals.forEach(x => this.addRental(x));
  }

  statement(): string {
    const buildHeader = () => `Rental Record for ${this.name}\n`;

    const buildLine = (rental: Rental) =>
      `\t${rental.daysRented}\t${rental.movie.title}\t${rental.calculateCost()}\n`;

    const buildFooter = () =>
      `Amount owed is ${totalAmount}\n` +
      `You earned ${frequentRenterPoints} frequent renter points`;

    const totalAmount = this.calculateTotalCost();
    const frequentRenterPoints = this.calculateTotalFrequentRenterPoints();

    let result = buildHeader();
    this.rentals.forEach(x => result += buildLine(x));
    result += buildFooter();
    return result;
  }

  private calculateTotalFrequentRenterPoints(): number {
    return this.rentals
      .map(x => x.calculateFrequentRenterPoints())
      .reduce(sum);
  }

  private calculateTotalCost(): number {
    return this.rentals
      .map(x => x.calculateCost())
      .reduce(sum);
  }
}
