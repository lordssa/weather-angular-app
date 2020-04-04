import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  location = {
    city: 'london',
    lat: '',
    lon: '',
  };

  latitude;
  longitude;

  weather: any;
  value: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.value = localStorage.getItem('location');
    if (this.value != null) {
      this.location = JSON.parse(this.value)
      if (this.location.city != null && this.location.city != "") {
        this.getWeather(this.location.city)
      } else {
        this.getWeatherDataByCoords(this.location.lat, this.location.lon);
      }
    } else {
      this.getlocation();
    }
  }

  getlocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.latitude = success.coords.latitude;
        this.longitude = success.coords.longitude;
        let location = {
          lat: this.latitude,
          lon: this.longitude
        }
        localStorage.setItem('location', JSON.stringify(location));
        this.getWeatherDataByCoords(this.latitude, this.longitude);
      })
    }
  }

  getWeather(city) {
    this._weatherService.getWeather(city).subscribe(response => {
      console.log(response);
      this.weather = response;
    });
  }
  getWeatherDataByCoords(lat, lon) {
    this._weatherService.getWeatherDataByCoords(this.latitude, this.longitude).subscribe(response => {
      console.log(response);
      this.weather = response;
    });
  }

  getCity(city) {
    this.getWeather(city);
  }

}
