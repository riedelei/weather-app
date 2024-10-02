import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Weather} from "../models/weather";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  getWeatherLonLat(lon: number, lat: number): Observable<Weather> {
      return this.httpClient.get<Weather>(this.url + '/', {
        params : {lat: lat, lon: lon}
      });
  }

  getWeatherFromCity(cityname: string): Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(this.url + '/', {
      params : {name: cityname}});
  }
}
