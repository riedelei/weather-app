import {Component, OnInit} from '@angular/core';
import {CityService} from "../city-search/city-service";
import {City} from "../models/city";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Toast} from "bootstrap";
import {animation} from "@angular/animations";

@Component({
  selector: 'app-city-search-list',
  templateUrl: './city-search-list.component.html',
  styleUrl: './city-search-list.component.css'
})
export class CitySearchListComponent implements OnInit{

  cities:Observable<City[]> = of([]);

  toggle: number = 0;

  cityToSearch:string | null;

  cityId: number = 0;



  constructor(private cityService: CityService,
              private route: ActivatedRoute) {
    this.cityToSearch='';

  }

  ngOnInit(): void {

    const toastElList = document.querySelectorAll('.toast')
    const toastList = [toastElList].map(toastEl => new Toast(toastEl.item(0)))

    this.route.paramMap.subscribe(params => {

      this.cityToSearch = params.get('cityToSearch');
    })

    if(this.cityToSearch === null) {
      this.cityToSearch = '';
    }
    this.cities = this.cityService.getCities(this.cityToSearch);
  }

  saveFavoriteCity(name: string, lat: number, lon: number, id:number): void {

    this.cityService.setFavoriteCity(name, lat, lon);
    this.toggle = 1;
    this.cityId = id;
  }

  checkToggle(): boolean {
    return this.toggle != 0;
  }
}
