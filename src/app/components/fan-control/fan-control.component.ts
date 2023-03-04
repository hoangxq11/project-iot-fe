import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-fan-control',
  templateUrl: './fan-control.component.html',
  styleUrls: ['./fan-control.component.scss']
})
export class FanControlComponent implements OnInit{

  mode!: string;
  status!: string;

  constructor(public modalRef: MdbModalRef<FanControlComponent>){}

  ngOnInit(): void {
    this.mode = "auto";
    this.status = "off";
  }

  swapMode(){ 
    this.mode = this.mode == "manual" ? "auto" : "manual";
  }

  turnOn(){
    this.status = "on";
  }

  turnOff(){
    this.status = "off";
  }

}
