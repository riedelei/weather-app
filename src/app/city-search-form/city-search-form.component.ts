import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
  styleUrl: './city-search-form.component.css'
})
export class CitySearchFormComponent {

  cityToSearch: string = '';

  searchForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private router : Router) {
    this.searchForm = this.formBuilder.group({
      searchCity: new FormControl()
    })

  }

  onSubmit() {
    this.cityToSearch =  this.searchForm.value.searchCity;
    this.router.navigate(['/cities', this.cityToSearch]);
  }
}
