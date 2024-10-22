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
      return this.httpClient.get<Weather>(this.url + 'weather', {
        params : {lat: lat, lon: lon}
      });
  }

  getWeatherFromFavoriteCity(): Observable<Weather> {
    return this.httpClient.get<Weather>(this.url + 'weatherfavoritecity');
  }
}
