import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { CountryInfoComponentComponent } from './country-info-component/country-info-component.component';
import { MapComponent } from './map/map.component';
import { CountryInfoComponent } from './country-info/country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent,
    CountryInfoComponentComponent,
    MapComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
