import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../model/flight';

@Component({
  selector: '[app-flight-viewer-row]',
  templateUrl: './flight-viewer-row.component.html',
  styleUrls: ['./flight-viewer-row.component.css']
})
export class FlightViewerRowComponent {
  @Input() flight: Flight;
  @Output() delete = new EventEmitter<Flight>();

  deleteFlight() {
    this.delete.emit(this.flight);
  }
}
