import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {City} from "../models/city";
import {Observable, of} from "rxjs";
import {FavoriteCity} from "../models/favoriteCity";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url: string = 'http://localhost:8080';

  private serverCity = {} as City;

  private serverCityArray: City[] = [];
  constructor(private httpClient: HttpClient) {

  }

  getCity(city: string): Observable<City> {
    return this.httpClient.get<City>(this.url+'/onecity', {
       params: {name: city}});
  }

  getCitiesFromDbOrNew(city:string): Observable<City[]> {
    return this.httpClient.get<City[]>(this.url+'/citydbornew', {
      params : {name:city }});
  }

  getCities(ci: string): Observable<City[]> {
    const params = new HttpParams()
      .set('name', ci);
    return this.httpClient.get<City[]>(this.url+'/city', {params});

  }

  setFavoriteCity(name: string, lat: number, lon: number) {
    this.httpClient.post<any>(this.url+'/favoritecity', {name: name, lat: lat, lon: lon},{
      params: {name: name, lat: lat, lon: lon}
    }).subscribe(log => { console.log("post send", log)});
  }

  getFavoriteCity(): Observable<FavoriteCity> {
    return this.httpClient.get<FavoriteCity>(this.url+'/favoritecity');
  }

  //hier möchte ihc die Stadt, die Standardmäßig angezeigt werden soll, ändern
  updatefavouriteCity(city: City): void {
    this.httpClient.put(this.url+'/city', city, { reportProgress:true});
  }

  // hier baue ich eine Liste von Favoriten-Städten auf
  setCity(city: City): void {
    this.httpClient.post('/city', city, { reportProgress:true});
  }
}
