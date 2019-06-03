import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core'; //for mouse event

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  markers: marker[] = [];

  // google maps zoom level
  zoom: number = 8;

  title: string = 'My first AGM project';
  lat: number = 6.928934;
  lng: number = 79.848490;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  constructor() { }

  ngOnInit() {
  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

