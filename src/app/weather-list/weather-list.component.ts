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
  cityData: Observable<City[]> = of();
  weatherData: Weather = {};
  cityList: City[] = [];
  numberOfCities: number=0;

  constructor(private cityservice: CityService,
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

    let lon: number | undefined = 0.0;
    let lat: number | undefined = 0.0;

    alert("Jetzt geht es slo"+this.cityWeather);
     this.cityData = this.cityservice.getCities(this.cityWeather);
     //alert(this.cityList[0].name);

     //   .pipe(map(cityArray => {
     //   alert("Bin in getcities");
     //   this.cityData = of(cityArray);
     //   this.numberOfCities = cityArray.length;
     //   alert(' sadfasf '+this.numberOfCities);
     //   if(cityArray.length === 1) {
     //     var c = cityArray.pop();
     //     lon = c?.lon;
     //     lat = c?.lat;
     //   }
     // }));

    // alert(this.numberOfCities);
    // if(this.numberOfCities === 1) {
    //   this.weatherService.getWeatherLonLat(lon, lat).subscribe(s=> {this.weatherData = s;});
    // }
  }

  loadWeather(lon: number, lat: number, ci: string): void {
    this.cityWeather = ci;

    // this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
    //   this.router.navigate(['/weatherlist',this.cityWeather]).then(()=>{
    //     console.log(`After navigation I am on:${this.router.url}`)
    //   })
    //
    // })
  }

  protected readonly length = length;
}
