import { Component } from '@angular/core';
import { WorldbankService } from './worldbank.service';
import { CountryInfo } from './models/country-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private worldbankService: WorldbankService) { }

  title = 'interactive_world_map_app';

  selectedCountryInfo?: CountryInfo;
  onCountryClick(countryCode: string) {
    this.worldbankService.getData(countryCode).subscribe(response => {
      if (response == null) {
        console.warn('No country found for code: ' + countryCode);
      } else {
        console.log(response);
        const countriesList = response[1];
        const firstCountry = countriesList[0];
        this.selectedCountryInfo = firstCountry;
      }
    });
  }
}
