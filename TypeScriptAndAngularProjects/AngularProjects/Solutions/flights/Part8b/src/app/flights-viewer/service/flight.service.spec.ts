import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Flight} from '../model/flight';
import {FlightsService} from './flights.service';
import {environment} from '../../../environments/environment';

const sampleFlightsJson = [
  {number: 101, origin: 'AAA', destination: 'BBB', arrival: '2019-01-01', departure: '2019-01-02'},
  {number: 102, origin: 'BBB', destination: 'CCC', arrival: '2019-01-02', departure: '2019-01-03'},
  {number: 103, origin: 'CCC', destination: 'DDD', arrival: '2019-01-03', departure: '2019-01-04'},
];

const sampleFlights = sampleFlightsJson.map(x => Flight.fromJson(x));

describe('FlightsService', () => {
  let httpMock: HttpTestingController;
  let target: FlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightsService]
    });
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    // Flights are read during constructions
    target = TestBed.get(FlightsService);

    httpMock.expectOne(environment.server_url)
      .flush(sampleFlightsJson);
    httpMock.verify();
  });

  it('All Flights Are Read and Mapped on constructions', () => {
    target.flights
      .subscribe(flights => expect(flights).toEqual(sampleFlights));
  });

  it('Returns the correct number of flights', () => {
    target.count
      .subscribe(count => expect(count).toEqual(3));
  });

  it('Refresh reads the flights again', async () => {
    target.refresh();

    httpMock.expectOne(environment.server_url)
      .flush(sampleFlightsJson);
    httpMock.verify();
  });
});
