import { Component } from '@angular/core';
import { JwtResponse } from 'src/app/commons/response/jwt-response';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  slug!: string;
  jwtResponse: JwtResponse = JSON.parse(sessionStorage.getItem("jwtToken") || "{}");

  ngOnInit(): void {
    this.slug = this.jwtResponse.roles[0] == "ROLE_ADMIN" ? "/admin-home" : "";
  }
}