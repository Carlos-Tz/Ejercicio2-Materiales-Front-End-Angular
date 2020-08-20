import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_SERVER = 'http://localhost:8000/api/material';
  constructor(private httpClient: HttpClient) {  }


  readMateriales(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.API_SERVER);
  }

  readMaterial(id: string): Observable<Material> {
    return this.httpClient.get<Material>(this.API_SERVER + '/' + id);
  }

  createMaterial(material: Material): Observable<Material>{
    return this.httpClient.post<Material>(this.API_SERVER, material);
  }

  updateMaterial(material: Material, id: string): Observable<Material>{
    return this.httpClient.put<Material>(this.API_SERVER + '/' + id, material);
  }

  deleteMaterial(id: string): Observable<Material>{
    return this.httpClient.delete<Material>(this.API_SERVER + '/' + id);
  }
}
