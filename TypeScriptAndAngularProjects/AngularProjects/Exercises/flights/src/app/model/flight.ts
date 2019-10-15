export class Flight {

  number: number;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;

  constructor(number: number, origin: string, destination: string, departure: string, arrival: string) {
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
    this.arrival = arrival;
  }
}

