import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightViewerRowComponent} from './flight-viewer-row.component';
import {Flight} from '../../model/flight';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {BlankComponent} from '../../utility/blank.component';

describe('FlightViewerRowComponent', () => {
  let component: FlightViewerRowComponent;
  let fixture: ComponentFixture<FlightViewerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightViewerRowComponent, BlankComponent],
      imports: [RouterTestingModule.withRoutes([
        {path: 'flights/102', component: BlankComponent}
      ])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightViewerRowComponent);
    component = fixture.componentInstance;
    component.flight = new Flight();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit the flight every time the is flight deleted', () => {
    const flights = [];
    component.delete.subscribe(flight => flights.push(flight));

    component.deleteFlight();
    component.deleteFlight();
    component.deleteFlight();

    expect(flights).toEqual([component.flight, component.flight, component.flight]);
  });

  it('Should format flight on screen correctly', () => {
    const cells = fixture.debugElement.queryAll(By.css('td'));

    component.flight = {
      number: 123,
      origin: 'BBB',
      destination: 'AAA',
      departure: new Date(2018, 0, 2, 12, 13, 14),
      arrival: new Date(2018, 2, 4, 13, 14, 15)
    };
    fixture.detectChanges();

    expect(cells.length).toEqual(7); // 5 data + 1 button
    expect(cells.map(x => x.nativeElement.textContent))
      .toEqual([
        '123',
        'BBB',
        'Jan 2, 2018',
        'AAA',
        'Mar 4, 2018',
        'Select',
        'Delete'
      ]);
  });
});
