import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather/weather.service";
import {Weather, WeatherClass} from "../models/weather";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather-aktuell',
  templateUrl: './weather-aktuell.component.html',
  styleUrl: './weather-aktuell.component.css'
})
export class WeatherAktuellComponent implements OnInit{

  weather: Weather = new WeatherClass( 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, BigInt(0), BigInt(0), 0, 0, 0, BigInt(0), 0);

  constructor(private weatherService: WeatherService,
              private router : Router) {
  }
  ngOnInit(): void {
    this.weatherService.getWeatherFromFavoriteCity().subscribe(w => {this.weather = w;});
  }

  addNewFavoriteCity(): void {
    this.router.navigate(['/citysearch']);
  }
}
