import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gas, TemHum } from './../commons/environment-infor';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentInforService {
    private baseURL = "http://localhost:8081/api";
    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    getFinalGas(): Observable<Gas[]> {
        return this.httpClient.get<Gas[]>(`${this.baseURL}/getfinalgas`, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

    getAllGas(): Observable<Gas[]> {
        return this.httpClient.get<Gas[]>(`${this.baseURL}/getallgas`, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

    getFinalTemHum(): Observable<TemHum[]> {
        return this.httpClient.get<TemHum[]>(`${this.baseURL}/getfinaltemhum`, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

    getAllTemHum(): Observable<TemHum[]> {
        return this.httpClient.get<TemHum[]>(`${this.baseURL}/getalltemhum`, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authService.getToken()}`
            })
        });
    }

}
