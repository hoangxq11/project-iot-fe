import { LightControlComponent } from './../light-control/light-control.component';
import { FanControlComponent } from './../fan-control/fan-control.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openModalFanControl(){
    this.modalService.open(FanControlComponent, {
      // modalClass: 'modal-lg'
    });
  }

  openModalLightControl(){
    this.modalService.open(LightControlComponent);
  }

}
