import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() countryClicked = new EventEmitter<string>();
  onMapClick(event: MouseEvent) {
    this.countryClicked.emit((event.target as HTMLElement).id);
      // console.log((event.target as HTMLElement).id);
  }
}
