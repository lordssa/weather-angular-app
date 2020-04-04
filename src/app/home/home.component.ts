import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  location = {
    city: 'london'
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
      this._weatherService.getWeather(this.location.city).subscribe(response => {
        console.log(response);
        this.weather = response;
      });
    } else {
      this.getlocation();
    }    
  }

  getlocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.latitude = success.coords.latitude;
        this.longitude = success.coords.longitude;
        this._weatherService.getWeatherDataByCoords(this.latitude, this.longitude).subscribe(response => {
          console.log(response);
          this.weather = response;
        });
      })
    }
  }
}
