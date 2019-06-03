import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps1',
  templateUrl: './maps1.component.html',
  styleUrls: ['./maps1.component.css']
})
export class Maps1Component implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  click(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
