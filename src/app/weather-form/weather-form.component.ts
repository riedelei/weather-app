import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css'
})
export class WeatherFormComponent {

  weatherForm: FormGroup = new FormGroup({});

  cityWeather: string = "";

  constructor(private formBuilder: FormBuilder,
              private router : Router) {
    this.weatherForm = this.formBuilder.group({
      searchCity: new FormControl()
    })

  }
  onSubmit() {
    this.cityWeather =  this.weatherForm.value.searchCity;
    this.router.navigate(['/weatherlist', this.cityWeather]);
  }

}
