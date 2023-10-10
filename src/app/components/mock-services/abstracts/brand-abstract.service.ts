import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';

@Injectable({
  providedIn: 'root'
})
export abstract class BrandAbstractService {
  abstract getBrands(): Observable<Brand[]>;
}