import { Routes } from '@angular/router';
import {CitySearchFormComponent} from "./city-search-form/city-search-form.component";
import {CitySearchListComponent} from "./city-search-list/city-search-list.component";

export const routes: Routes = [
  {
    path:"", component: CitySearchFormComponent
  },
  {
    path:"home", component:CitySearchFormComponent
  },
  {
    path:"cities/:cityToSearch", component:CitySearchListComponent
  }
];
