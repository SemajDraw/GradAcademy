import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Flight } from '../../model/flight';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  name = 'FlightViewerComponent';

  flights: Flight[];

  ngOnInit(): void {
    this.flightsService.getAllFlights()
      .subscribe(flights => this.flights = flights);
  }

  constructor(private flightsService: FlightsService) { }

}
