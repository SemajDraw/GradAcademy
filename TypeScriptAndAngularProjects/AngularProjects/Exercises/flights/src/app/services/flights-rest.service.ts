import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Flight} from '../model/flight';
import {FlightsService} from './flights.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const server_url = environment.server_url;

@Injectable()
export class FlightsRestService extends FlightsService {

  private flightsSubject: BehaviorSubject<Flight[]>;

  constructor(private http: HttpClient) {
    super();
    this.flightsSubject = new BehaviorSubject<Flight[]>([]);
  }

  get flights(): Observable<Flight[]> {
    return this.flightsSubject;
  }

  getAllFlights(): Observable<Flight[]> {
    return this.http.get<any[]>(server_url)
      .pipe(map(json => json.map(Flight.fromJson)));
  }

  refresh() {
    return this.getAllFlights()
      .subscribe(flights => this.flightsSubject.next(flights));
  }
}
