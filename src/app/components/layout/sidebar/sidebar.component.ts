import { JwtResponse } from './../../../commons/response/jwt-response';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  slug!: string;
  jwtResponse: JwtResponse = JSON.parse(sessionStorage.getItem("jwtToken") || "{}");

  ngOnInit(): void {
    this.slug = this.jwtResponse.roles[0] == "ROLE_ADMIN" ? "/admin-home" : "";
  }
}
