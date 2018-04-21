import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {Coordinate} from '../../coordinate'

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit {

  protected map: any;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;


  private coordinates :Array<Coordinate>;

   lat: number = 32.085300;
   lng: number = 34.781768;

   zoom: number = 13;
  constructor(private _loader: MapsAPILoader, private _zone: NgZone ) {
    this.coordinates = new Array<Coordinate>();
   }

   protected mapReady(map) {
    this.map = map;
   }

   public markerClicked = (markerObj) => {
    if (this.map)
      this.map.setCenter({ lat: markerObj.lat, lng: markerObj.lng });
    console.log('clicked', markerObj, { lat: markerObj.lat, lng: markerObj.lng });
  }

  ngOnInit() {
  this.coordinates = [{lat:32.074077, lng:34.792203}, {lat:32.162413, lng:34.844675}, {lat:32.794046, lng:34.989571}];
};

GetLongAndLat(longLatStr) {
  let parts:any = longLatStr.split(", ");
  this.coordinates.push(new Coordinate(parseFloat(parts[0]), parseFloat(parts[1])));
  console.log(parts[0], parts[1]);
}

remove(item){
let index = this.coordinates.indexOf(item);
this.coordinates.splice(index, 1);     
}

}
