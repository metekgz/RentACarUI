import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<Car[]> {
    let newPath = this.apiUrl + 'cars';
    return this.httpClient.get<Car[]>(newPath);
  }

  getCarsByBrand(id: number) {
    let newPath = this.apiUrl + 'cars/brandId/' + id;
    return this.httpClient.get<Car[]>(newPath);
  }

  addCar(car: Car) {
    return this.httpClient.post(this.apiUrl + 'cars/add', car);
  }

  deleteCar(id: number) {
    return this.httpClient.delete(this.apiUrl + 'cars/delete/' + id);
  }

  updateCar(car: Car) {
    return this.httpClient.put(this.apiUrl + 'cars/update/{id}', car);
  }
}
