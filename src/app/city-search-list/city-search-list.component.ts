import {Component, Input, OnInit} from '@angular/core';
import {CityService} from "../city-search/city-service";
import {City} from "../models/city";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-city-search-list',
  templateUrl: './city-search-list.component.html',
  styleUrl: './city-search-list.component.css'
})
export class CitySearchListComponent implements OnInit{

  cities:Observable<City[]> = of([]);

  cityToSearch:string | null;

  constructor(private cityService: CityService,
              private route: ActivatedRoute) {
    this.cityToSearch=''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.cityToSearch = params.get('cityToSearch');
    })

    if(this.cityToSearch === null) {
      this.cityToSearch = '';
    }
    this.cities = this.cityService.getCities(this.cityToSearch);
  }
}
