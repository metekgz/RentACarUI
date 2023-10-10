import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export abstract class CarAbstractService {

  abstract getBrands(): Observable<Car[]>;
}
