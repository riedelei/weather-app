import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CitySearchFormComponent} from "../city-search-form/city-search-form.component";
import {CitySearchListComponent} from "../city-search-list/city-search-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CityService} from "./city-service";
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";



@NgModule({
  declarations: [CitySearchFormComponent, CitySearchListComponent],
  exports: [CitySearchFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppComponent,
    HomeComponent
  ]
})
export class CitySearchModule { }
