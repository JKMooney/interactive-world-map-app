export interface CountryInfo {
  name: string;
  region: AdminRegion;
  incomeLevel: AdminRegion;
  capitalCity: string;
  longitude: string;
  latitude: string;
}

export interface AdminRegion {
  value: string;
}