import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appID = 'd0962b534f5c537f43237224add857ef';
  url;

  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city) {
    return this.http.get(this.url + city + '&APPID=' + this.appID);      
  }

  getWeatherDataByCoords(lat, lon){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appId', this.appID);
    
    return this.http.get(this.url, {params});    
  }
}
