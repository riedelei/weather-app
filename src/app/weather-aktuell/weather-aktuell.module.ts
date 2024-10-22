import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherAktuellComponent} from "./weather-aktuell.component";



@NgModule({
  declarations: [WeatherAktuellComponent],
  exports: [WeatherAktuellComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherAktuellModule { }
