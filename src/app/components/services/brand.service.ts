import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'http://localhost:8080/api/brands';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
}
