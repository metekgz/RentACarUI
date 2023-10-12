import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../../models/brand';

@Injectable({
  providedIn: 'root',
})
export abstract class BrandAbstractService {
  abstract getBrands(): Observable<Brand[]>;
}
