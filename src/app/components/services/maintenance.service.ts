import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Maintenance } from 'src/app/models/maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  apiUrl = 'http://localhost:8080/api/maintenances';
  constructor(private httpClient: HttpClient) {}



  addMaintenance(maintenance:Maintenance) {
    return this.httpClient.post(this.apiUrl + '/add', maintenance);
  }

  deleteMaintenance(id: number) {
    return this.httpClient.delete(this.apiUrl + '/delete/' + id);
  }

  updateMaintenance(maintenance:Maintenance) {
    return this.httpClient.put(this.apiUrl + '/update/{id}', maintenance);
  }
}
