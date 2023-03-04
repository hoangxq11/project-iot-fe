import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FanControlComponent } from '../fan-control/fan-control.component';

@Component({
  selector: 'app-light-control',
  templateUrl: './light-control.component.html',
  styleUrls: ['./light-control.component.scss']
})
export class LightControlComponent implements OnInit {
  mode!: string;
  status!: string;

  constructor(public modalRef: MdbModalRef<FanControlComponent>) { }

  ngOnInit(): void {
    this.mode = "auto";
    this.status = "off";
  }

  swapMode() {
    this.mode = this.mode == "manual" ? "auto" : "manual";
  }

  turnOn() {
    this.status = "on";
  }

  turnOff() {
    this.status = "off";
  }
}
