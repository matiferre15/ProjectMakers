import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  API_URI = 'https://backend-makers-production.up.railway.app/api';

  constructor(private http: HttpClient) {  }

  getAgenda(id: string){
    return this.http.get(`${this.API_URI}/agenda/${id}`)
  }
}
