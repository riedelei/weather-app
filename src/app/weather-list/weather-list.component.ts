import {Component, OnInit} from '@angular/core';
import {CityService} from "../city-search/city-service";
import {ActivatedRoute, Router} from "@angular/router";
import {City} from "../models/city";
import {count, map, Observable, of, take, tap, toArray} from "rxjs";
import {WeatherService} from "../weather/weather.service";
import {Weather} from "../models/weather";

@Component({
  selector: 'app-weather-list',
  standalone:false,
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent implements OnInit{

  weatherData: Observable<Weather> = of();
  lat: number = 0.0;
  lon: number = 0.0;

  constructor(private cityService: CityService,
              private weatherService: WeatherService,
              private router : Router,
              private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let slon = params.get('lon');
      let slat = params.get('lat');
      if(!isNaN(Number(slon))) {
        this.lon = Number(slon);
      }
      if(!isNaN(Number(slat))) {
        this.lat = Number(slat);
      }


    })
    this.weatherData = this.weatherService.getWeatherLonLat(this.lon, this.lat);
  }
}
