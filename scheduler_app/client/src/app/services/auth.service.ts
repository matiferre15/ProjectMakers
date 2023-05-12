import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarioLogueado(user: string, password:string){
    return this.http.get(`${this.API_URI}/users/${user}/${password}`)
  }

  userExists(username: string): Observable<boolean> {
    return this.http.get(`${this.API_URI}/users/${username}`).pipe(
      map((response: any) => {
        // Si la respuesta es 200 (OK), el usuario existe
        console.log('El usuario existe:', response);
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        // Si la respuesta es 404 (Not Found), el usuario no existe
        console.error('El usuario no existe:', error);
        return throwError(false);
      })
    );
  }
}

    
    
  


