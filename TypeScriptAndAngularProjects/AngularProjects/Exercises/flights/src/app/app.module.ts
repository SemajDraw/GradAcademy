import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { FlightViewerRowComponent } from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightsService} from './services/flights.service';
import {FlightsRestService} from './services/flights-rest.service';


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: FlightsService, useClass: FlightsRestService}
  ],
  bootstrap: [
    FlightViewerComponent
  ]
})
export class AppModule {
}
