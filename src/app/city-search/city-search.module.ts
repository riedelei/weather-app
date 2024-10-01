import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CitySearchFormComponent} from "../city-search-form/city-search-form.component";
import {CitySearchListComponent} from "../city-search-list/city-search-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CityService} from "./city-service";



@NgModule({
  declarations: [CitySearchFormComponent, CitySearchListComponent],
  exports: [CitySearchFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CitySearchModule { }
