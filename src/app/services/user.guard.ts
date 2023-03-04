import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtResponse } from '../commons/response/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  jwtToken: JwtResponse = new JwtResponse;
  
  constructor(private router: Router) {
  }

  canActivate(){
    this.jwtToken = JSON.parse(sessionStorage.getItem("jwtToken") || '{}');
    if(this.jwtToken.roles[0] == "ROLE_USER"){
      return true;
    }
    this.router.navigate(['404']);
    return false;
  }
  
}
