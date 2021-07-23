import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Service } from '../models/interfaces/Exports';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(environment.API_URI + '/service');
  }

  getService(id: string): Observable<Service> {
    return this.http.get(environment.API_URI + '/service' + id);
  }

  saveService(services: Service[]): Observable<Service> {
    return this.http.post(environment.API_URI + '/service', services);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete(environment.API_URI + '/service' + id);
  }
}
