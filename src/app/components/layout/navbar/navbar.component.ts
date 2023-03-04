import { JwtResponse } from './../../../commons/response/jwt-response';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  slug!: string;
  jwtResponse: JwtResponse = JSON.parse(sessionStorage.getItem("jwtToken") || "{}")

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.slug = this.jwtResponse.roles[0] == "ROLE_ADMIN" ? "/admin-home" : "";
  }

  onLogout(){
    sessionStorage.removeItem("jwtToken");
    this.router.navigate(['/login']);
  }

}
