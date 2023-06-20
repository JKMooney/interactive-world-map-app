import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {

  constructor(private http: HttpClient) { }

  getData(countryName: string): Observable<any[]> {
    return this.http.get<any[]>('http://api.worldbank.org/v2/country/' + countryName, {
      params: {
        format: 'json',
      }
    });
  }
}
