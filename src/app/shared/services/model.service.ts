import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  apiUrl = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) {}

  addModel(model: Model) {
    return this.httpClient.post(this.apiUrl + 'models/add', model);
  }

}
