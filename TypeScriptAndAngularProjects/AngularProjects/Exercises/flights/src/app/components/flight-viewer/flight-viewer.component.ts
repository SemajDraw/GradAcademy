import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Flight } from '../../model/flight';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  name = 'FlightViewerComponent';

  flights: Flight[];

  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
    this.http.get<Flight[]>('http://localhost:8090/flights')
      .pipe(map(jsonArray =>
        jsonArray.map(flight => new Flight(
          flight.number,
          flight.origin,
          flight.destination,
          flight.departure,
          flight.arrival))))
      .subscribe(data => this.flights = data);
  }
}
