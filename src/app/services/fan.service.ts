import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FanMode } from './../commons/device-mode';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class FanService {
    private baseURL = "http://localhost:8081/api";
    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    addLightMode(fanMode: FanMode): Observable<FanMode> {
        return this.httpClient.post<FanMode>(`${this.baseURL}/addfanmode`, fanMode, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

    getFinalFanMode(): Observable<FanMode[]> {
        return this.httpClient.get<FanMode[]>(`${this.baseURL}/getfinalfanmode`, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

}
