import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightUpdateFormComponent} from './flight-update-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '../../../date-picker/date-picker.module';
import {FlightsService} from '../../service/flights.service';

const flightService = jasmine.createSpyObj(['update']) as FlightsService;

describe('FlightUpdateFormComponent', () => {
  let component: FlightUpdateFormComponent;
  let fixture: ComponentFixture<FlightUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DatePickerModule
      ],
      declarations: [
        FlightUpdateFormComponent
      ],
      providers: [{provide: FlightsService, useValue: flightService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
