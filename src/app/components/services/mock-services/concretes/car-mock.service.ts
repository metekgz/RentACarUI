import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarAbstractService } from '../abstracts/car-abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export abstract class CarMockService implements CarAbstractService {
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
  getBrandById(brandId: number): Observable<Car[]> {
    let newPath = `${this.apiUrl}/${brandId}?_expand=model&brandId=${brandId}`;
    return this.httpClient
      .get<Car[]>(newPath)
      .pipe(map((response: any) => [response]));
  }

  getCarsByBrand(brandId: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl+ '?_expand=model&_expand=brand/').pipe(
      map(cars => cars.filter(car => car.model.brandId == brandId))
    );
  }
  
  
}
