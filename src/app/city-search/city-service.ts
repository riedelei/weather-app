import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {City} from "../models/city";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url: string = 'http://localhost:8080';

  private serverCity = {} as City;

  private serverCityArray: City[] = [];
  constructor(private httpClient: HttpClient) {

  }

  getCity(city: string): City {
    this.httpClient.get<City>(this.url+'/onecity', {
       params: {name: city}}).subscribe(c => {
      this.serverCity = c;
    })
    return this.serverCity;
  }

  getCities(ci: string): Observable<City[]> {

    return this.httpClient.get<City[]>(this.url+'/city', {
      params : {name:ci }});

  }
  getServerCityArray(): City[] {
    alert("!!!"+this.serverCityArray[0].name);
    return this.serverCityArray;
  }

  //hier möchte ihc die Stadt, die Standardmäßig angezeigt werden soll, ändern
  updatefavouriteCity(city: City): void {
    this.httpClient.put('/city', city, { reportProgress:true});
  }

  // hier baue ich eine Liste von Favoriten-Städten auf
  setCity(city: City): void {
    this.httpClient.post('/city', city, { reportProgress:true});
  }
}
