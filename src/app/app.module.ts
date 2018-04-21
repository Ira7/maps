import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponentComponent } from './map-component/map-component/map-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDaQ1-kuRlu8ym6O3GuLUjTsEo8Ljt1DpM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
