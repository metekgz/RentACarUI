import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'http://localhost:8080/api/brands';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }

  addBrand(brand: Brand) {
    return this.httpClient.post(this.apiUrl + '/add', brand);
  }

  deleteBrand(id: number) {
    return this.httpClient.delete(this.apiUrl + '/delete/' + id);
  }

  updateBrand(brand: Brand) {
    return this.httpClient.put(this.apiUrl + '/update/{id}', brand);
  }
}
