import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarAbstractService } from '../abstracts/car-abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export  class CarMockService implements CarAbstractService {
  apiUrl = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      this.apiUrl + '?_expand=model&_expand=brand/'
    );
  }

  getCarsByBrand(brandId: number): Observable<Car[]> {
    return this.httpClient
      .get<Car[]>(this.apiUrl + '?_expand=model&_expand=brand/')
      .pipe(map((cars) => cars.filter((car) => car.model.brandId == brandId)));
  }
}
