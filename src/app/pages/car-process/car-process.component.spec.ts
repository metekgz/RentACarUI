import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProcessComponent } from './car-process.component';

describe('CarProcessComponent', () => {
  let component: CarProcessComponent;
  let fixture: ComponentFixture<CarProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarProcessComponent]
    });
    fixture = TestBed.createComponent(CarProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
