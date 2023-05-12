import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarioLogueado(user: string, password:string){
    return this.http.get(`${this.API_URI}/users/${user}/${password}`)
  }
    
    
  }
  


