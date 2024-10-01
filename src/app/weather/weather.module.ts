import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherFormComponent} from "../weather-form/weather-form.component";
import {WeatherListComponent} from "../weather-list/weather-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [WeatherListComponent, WeatherFormComponent],
  exports: [
    WeatherFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class WeatherModule { }
