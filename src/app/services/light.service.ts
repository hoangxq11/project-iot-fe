import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LightMode } from './../commons/device-mode';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LightService {
  private baseURL = "http://localhost:8081/api";
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  addLightMode(lightMode: LightMode): Observable<LightMode> {
    return this.httpClient.post<LightMode>(`${this.baseURL}/addlightmode`, lightMode, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    });
  }

  getFinalLightMode(): Observable<LightMode[]> {
    return this.httpClient.get<LightMode[]>(`${this.baseURL}/getfinallightmode`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    });
  }

  addManualLightMode(lightMode: LightMode): Observable<LightMode> {
    return this.httpClient.post<LightMode>(`${this.baseURL}/addmanuallight`, lightMode, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    });
  }

  getFinalManualLightMode(): Observable<LightMode[]> {
    return this.httpClient.get<LightMode[]>(`${this.baseURL}/getfinalmanuallight`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    });
  }

}
