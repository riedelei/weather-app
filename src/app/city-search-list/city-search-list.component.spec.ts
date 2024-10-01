import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchListComponent } from './city-search-list.component';

describe('CitySearchListComponent', () => {
  let component: CitySearchListComponent;
  let fixture: ComponentFixture<CitySearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitySearchListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
