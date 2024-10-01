import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CitySearchModule} from "./city-search/city-search.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CitySearchModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
