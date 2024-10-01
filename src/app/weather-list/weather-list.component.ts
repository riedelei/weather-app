import {Component, OnInit} from '@angular/core';
import {CityService} from "../city-search/city-service";
import {ActivatedRoute} from "@angular/router";
import {City} from "../models/city";
import {Observable, of} from "rxjs";
import {WeatherService} from "../weather/weather.service";
import {Weather} from "../models/weather";

@Component({
  selector: 'app-weather-list',
  standalone:false,
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent implements OnInit{

  cityWeather: string | null;
  cities: Observable<City[]> = of();
  weatherData: Observable<Weather> = of();
  constructor(private cityservice: CityService,
              private weatherService: WeatherService,
              private route: ActivatedRoute) {
    this.cityWeather = '';
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.cityWeather = params.get('cityWeather');
    })

    if(this.cityWeather === null)
    { this.cityWeather= '';}
    this.weatherData = this.weatherService.getWeatherFromCity(this.cityWeather);
  }

}
