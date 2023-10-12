import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarAbstractService } from '../abstracts/car-abstract.service';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarMockService implements CarAbstractService {
  apiUrl = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  getCarsByBrand(brandId: number): Observable<Car[]> {
    const url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);
  }

  addCar(car: Car) {
    return this.httpClient.post(this.apiUrl + '/add', car);
  }
}
