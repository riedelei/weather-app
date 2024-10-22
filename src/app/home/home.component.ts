import { Component } from '@angular/core';
import {WeatherModule} from "../weather/weather.module";
import {RouterLink} from "@angular/router";
import {WeatherAktuellModule} from "../weather-aktuell/weather-aktuell.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WeatherModule,
    WeatherAktuellModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
