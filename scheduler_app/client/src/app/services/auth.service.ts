import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userId: string;
  private _loginSuccess: boolean;

  API_URI = 'https://backend-makers-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

  getUsuarioLogueado(userData: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.API_URI}/login`;
    return this.http.post(url, userData, { headers })
  }

  getLoginSuccess(): boolean {
    return this._loginSuccess;
  }

  setLoginSuccess(loginSuccess: boolean) {
    this._loginSuccess = loginSuccess;
  }


  getUserId(): string {
    return this._userId;
  }

  setUserId(userId: string) {
    this._userId = userId;
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

    
    
  


