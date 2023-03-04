import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-iot-fe';

  role: string = "NONE";

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role') as string;
  }
}
