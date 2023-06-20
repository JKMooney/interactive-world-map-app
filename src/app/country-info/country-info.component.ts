import { Component, Input } from '@angular/core';
import { CountryInfo } from '../models/country-info';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {
  @Input() countryInfo?: CountryInfo;
}
