import { Account } from './../commons/response/account';
import { JwtResponse } from './../commons/response/jwt-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { AccountLogin } from '../commons/account-login';
import { AccountRegistration } from '../commons/account-registration';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private rootURL = "http://localhost:8081/api";
  private baseURL = "http://localhost:8081/api/auth";
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  authentication(accountLogin: AccountLogin): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.baseURL}/signin`, accountLogin);
  }

  registration(accountRegistration: AccountRegistration): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/signup`, accountRegistration);
  }

  getAllAccounts():Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.rootURL}/users`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.authService.getToken()}`
      })
    });
  }

}
