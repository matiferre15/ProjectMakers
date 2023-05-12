import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  createMeeting(meetingData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.API_URI}/meet`;
    return this.http.post(url, meetingData, { headers });
  }
}
