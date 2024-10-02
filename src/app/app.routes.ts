import { Routes } from '@angular/router';
import {CitySearchListComponent} from "./city-search-list/city-search-list.component";
import {HomeComponent} from "./home/home.component";
import {CitySearchFormComponent} from "./city-search-form/city-search-form.component";
import {WeatherListComponent} from "./weather-list/weather-list.component";

export const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"cities/:cityToSearch", component:CitySearchListComponent
  },
  {
    path:"citysearch", component:CitySearchFormComponent
  },
  {
    path:"weatherlist/:cityWeather", component:WeatherListComponent
  }
];
