import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherApiKey } from 'keys/apikeys';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = weatherApiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(apiUrl);
  }
}