import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAktuellComponent } from './weather-aktuell.component';

describe('WeatherAktuellComponent', () => {
  let component: WeatherAktuellComponent;
  let fixture: ComponentFixture<WeatherAktuellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAktuellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAktuellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
