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

  cityWeather: string | null;
  cityData: Observable<City[]>  = of();
  weatherData: Observable<Weather> = of();

  constructor(private cityService: CityService,
              private weatherService: WeatherService,
              private router : Router,
              private route: ActivatedRoute) {
    this.cityWeather = '';
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.cityWeather = params.get('cityWeather');
    })

    if(this.cityWeather === null)
    { this.cityWeather= '';}

    this.cityData = this.cityService.getCities(this.cityWeather).pipe(tap( cityArray  => {
      // console.log(cityArray);
      // if(cityArray.length === 1) {
      //   let city = cityArray[0];
      //   this.weatherData = this.weatherService.getWeatherLonLat(city.lon, city.lat)
      // }
    }));
  }

  loadWeather(lon: number, lat: number): void {

    this.cityData = of();
    this.weatherData = this.weatherService.getWeatherLonLat(lon, lat);
    // this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
    //   this.router.navigate(['/weatherlist',this.cityWeather]).then(()=>{
    //     console.log(`After navigation I am on:${this.router.url}`)
    //   })
    // });
  }
}
